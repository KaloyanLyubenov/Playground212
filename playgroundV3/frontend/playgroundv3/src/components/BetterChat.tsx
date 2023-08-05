import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import "../styles/betterChat.css";

interface Message {
  orderName: string;
  receiverEmail: string;
  senderEmail: string;
  content: string;
}

interface ChatProps {
  orderName: string;
  userEmail: string;
}

const BetterChat: React.FC<ChatProps> = ({ orderName, userEmail }) => {
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const receiverEmail = useRef("");

  useEffect(() => {
    const socket: WebSocket = new SockJS("http://localhost:8080/ws");
    const stomp: Stomp.Client = Stomp.over(socket);
    if (userEmail !== "kalo@mail.com") {
      receiverEmail.current = "kalo@mail.com";
    }

    stomp.connect(
      {},
      (frame) => {
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

  const onMessageReceived = (payload: Stomp.Message) => {
    const message: Message = JSON.parse(payload.body);

    console.log(`UserEmail: ${userEmail}`);
    console.log(`Order: ${orderName}`);

    console.log(
      `The sent message is from: ${message.senderEmail} / being sent to ${message.receiverEmail} / in regareds to order: ${message.orderName}`
    );

    if (
      (message.receiverEmail === userEmail ||
        message.senderEmail === userEmail) &&
      message.orderName === orderName
    ) {
      console.log("This message is for you");
      setMessages((prevMessages) => [...prevMessages, message]);
    } else {
      console.log("This message isn't for you");
    }
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const messageContent = message;

    if (messageContent && stompClient) {
      const chatMessage: Message = {
        orderName: "GG",
        senderEmail: userEmail,
        receiverEmail: receiverEmail.current,
        content: messageContent,
      };

      stompClient.send(
        "/app/chat.sendMessage",
        {},
        JSON.stringify(chatMessage)
      );
      console.log("Message is: " + messageContent);
      setMessage("");
    }
  };

  return (
    <>
      <div className="chat-box">
        <ul className="message-box">
          {messages.map((message, index) => (
            <li key={index} className="message">
              <p className="prof-icon">{message.senderEmail[0]}</p>
              <p className="message-content">{message.content}</p>
            </li>
          ))}
        </ul>
        <div className="text-input">
          <input
            type="text"
            className="message-input"
            placeholder="Type message..."
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default BetterChat;
