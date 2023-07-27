import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import "../styles/chat.css";

interface Message {
  senderEmail: string;
  receiverEmail?: string;
  content: string;
  type: "JOIN" | "LEAVE" | "MESSAGE";
}

const Chat: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [receiverEmail, setReceiverEmail] = useState<string>("");
  const [page, setPage] = useState<string>("email");
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [connected, setConnected] = useState(false);
  const [users, setUsers] = useState<string[]>([]);

  const colors: string[] = [
    "#2196F3",
    "#32c787",
    "#00BCD4",
    "#ff5652",
    "#ffc107",
    "#ff85af",
    "#FF9800",
    "#39bbb0",
  ];

  const email2 = useRef("");

  useEffect(() => {
    const socket: WebSocket = new SockJS("http://localhost:8080/ws");
    const stomp: Stomp.Client = Stomp.over(socket);

    console.log(stomp);

    stomp.connect(
      {},
      (frame) => {
        setConnected(true);
        stomp.subscribe("/topic/public", (message) => {
          onMessageReceived(message);
        });
      },
      (error) => {
        console.error("Stomp error", error);
      }
    );

    setStompClient(stomp);
  }, []);

  const connect = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim() !== "") {
      setPage("chat");

      const onConnected = () => {
        stompClient?.send(
          "/app/chat.addUser",
          {},
          JSON.stringify({ senderEmail: email, type: "JOIN" })
        );
      };

      const onError = (error: any) => {
        console.log(
          "Could not connect to WebSocket server. Please refresh this page to try again!",
          error
        );
      };

      stompClient?.connect({}, onConnected, onError);
    }
  };

  const onMessageReceived = (payload: Stomp.Message) => {
    const message: Message = JSON.parse(payload.body);
    if (!users.includes(message.senderEmail)) {
      let usersSoFar = users;
      usersSoFar.push(message.senderEmail);
      setUsers(usersSoFar);
    }

    console.log(
      `Message receiver: ${message.receiverEmail} and email of current user is: ${email2.current}`
    );

    if (
      message.receiverEmail === email2.current ||
      message.senderEmail === email2.current
    ) {
      console.log("this message is for you");
      setMessages((prevMessages) => [...prevMessages, message]);
    } else {
      console.log("This message isn't for you");
    }

    console.log(users);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const messageContent = message;

    if (messageContent && stompClient) {
      const chatMessage: Message = {
        senderEmail: email,
        receiverEmail: receiverEmail,
        content: messageContent,
        type: "MESSAGE",
      };

      stompClient.send(
        "/app/chat.sendMessage",
        {},
        JSON.stringify(chatMessage)
      );
      setMessage("");
    }
  };

  const getAvatarColor = (messageSender: string) => {
    let hash = 0;
    for (let i = 0; i < messageSender.length; i++) {
      hash = 31 * hash + messageSender.charCodeAt(i);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setEmail(e.target.value);
    }
  };

  useEffect(() => {
    email2.current = email;
    console.log(email);
  }, [email]);

  return (
    <>
      {page === "email" && (
        <>
          <div className="email-page">
            <div className="email-page-container">
              <h1 className="title">Type your email to enter the chatroom</h1>
              <form name="email-form" onSubmit={connect}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    className="form-control"
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="accent email-submit">
                    Start Chatting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {page === "chat" && (
        <div className="chat-page">
          <ul className="user-list">
            {users.map(
              (user, index) =>
                user !== email && (
                  <li key={index} className="user-field">
                    <i
                      style={{
                        backgroundColor: getAvatarColor(user),
                      }}
                    >
                      {user[0]}
                    </i>
                  </li>
                )
            )}
          </ul>
          <div className="chat-container">
            <div className="chat-header">
              <h2>Hello {email}</h2>
            </div>
            <ul className="message-area">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.type === "JOIN" || message.type === "LEAVE"
                      ? "event-message"
                      : "chat-message"
                  }
                >
                  {message.type === "JOIN" && `${message.senderEmail} joined!`}
                  {message.type === "LEAVE" && `${message.senderEmail} left!`}
                  {message.type === "MESSAGE" && (
                    <>
                      <i
                        style={{
                          backgroundColor: getAvatarColor(message.senderEmail),
                        }}
                      >
                        {message.senderEmail[0]}
                      </i>
                      <span>{message.senderEmail}</span>
                      <p>{message.content}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <form className="message-form">
              <div className="form-group">
                <div className="input-group clearfix">
                  <input
                    type="text"
                    className="message"
                    placeholder="Type a message..."
                    autoComplete="off"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input
                    type="text"
                    className="message"
                    placeholder="Type a receiver email..."
                    autoComplete="off"
                    value={receiverEmail}
                    onChange={(e) => setReceiverEmail(e.target.value)}
                  />
                  <button onClick={sendMessage} className="primary">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
