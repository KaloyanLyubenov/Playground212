import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

interface Message {
  senderEmail: string;
  content: string;
  type: "JOIN" | "LEAVE" | "MESSAGE";
}

const Chat: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [page, setPage] = useState<string>("email");
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [connected, setConnected] = useState(false);

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

  useEffect(() => {
    const socket: WebSocket = new SockJS("http://localhost:8080/ws");
    const stomp: Stomp.Client = Stomp.over(socket);

    console.log(stomp);

    stomp.connect(
      {},
      (frame) => {
        console.log("gosho i tosho");
        setConnected(true);
        stomp.subscribe("/topic/public", (message) => {
          setMessages((messages) => [...messages, JSON.parse(message.body)]);
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
    console.log("stompClient:", stompClient);

    if (email.trim() !== "") {
      setPage("chat");

      const onConnected = () => {
        console.log("is succesfully connected");
        // stompClient?.subscribe("/topic/public", onMessageReceived);

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
    console.log("Received message:", message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const messageContent = message;

    if (messageContent && stompClient) {
      const chatMessage: Message = {
        senderEmail: email,
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
                    onChange={(e) => setEmail(e.target.value)}
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
          <button onClick={connect}>Connect me</button>
        </>
      )}
      {page === "chat" && (
        <div className="chat-page">
          <div className="chat-container">
            <div className="chat-header">
              <h2>Spring Websockets By KOKOMOKO</h2>
            </div>
            <div className="connecting">Connecting...</div>
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
            <form className="message-form" onSubmit={sendMessage}>
              <div className="form-group">
                <div className="input-group clearfix">
                  <input
                    type="text"
                    className="message"
                    placeholder="Type a message..."
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit" className="primary">
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
