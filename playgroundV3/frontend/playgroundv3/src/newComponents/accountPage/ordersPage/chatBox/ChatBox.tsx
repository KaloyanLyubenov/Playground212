import React, { useEffect, useRef, useState } from "react";
import { StyledChatBox } from "./ChatBoxStyles";
import { motion } from "framer-motion";
import { orderString } from "aws-sdk/clients/discovery";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";

type Message = {
  orderID: number;
  senderEmail: string;
  receiverEmail: string;
  content: string;
};

type ChatBoxProps = { orderUserEmail: string; orderID: number };

const ChatBox: React.FC<ChatBoxProps> = ({ orderUserEmail, orderID }) => {
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentMesage, setCurrentMessage] = useState("");
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const loggedUserEmail = useRef<string>(localStorage.getItem("email"));

  useEffect(() => {
    const socket: WebSocket = new SockJS("http://localhost:8080/ws");
    const stomp: Stomp.Client = Stomp.over(socket);

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

    axios
      .get(`http://localhost:8080/messages?orderid=${orderID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setAllMessages(response.data);
      })
      .catch((error) => {
        console.log("Couldn't get orders!");
      });
  }, []);

  const onMessageReceived = (payload: Stomp.Message) => {
    const message: Message = JSON.parse(payload.body);

    console.log(
      `The sent message is from: ${message.senderEmail} / being sent to ${message.receiverEmail} / in regareds to order: ${message.orderID}`
    );

    if (
      message.receiverEmail === loggedUserEmail.current ||
      message.senderEmail === loggedUserEmail.current
    ) {
      console.log("This message is for you");
      setAllMessages((prevMessages) => [...prevMessages, message]);
    } else {
      console.log("This message isn't for you");
    }
  };

  const handleMessageSend = () => {
    if (currentMesage !== "") {
      let senderEmail = localStorage.getItem("email");
      let receiverEmail =
        senderEmail !== "nick@mail.com" ? "nick@mail.com" : orderUserEmail;

      let newMessage = {
        orderID: orderID,
        senderEmail: senderEmail as string,
        receiverEmail: receiverEmail,
        content: currentMesage,
      };

      if (stompClient) {
        stompClient.send(
          "/app/chat.sendMessage",
          {},
          JSON.stringify(newMessage)
        );
      }
    }
    setCurrentMessage("");
  };

  return (
    <StyledChatBox>
      <div className="messages">
        {allMessages.map((message) => {
          return (
            <div
              className={`message ${
                loggedUserEmail.current === message.senderEmail
                  ? "sent"
                  : "received"
              }`}
            >
              <div className="message-content">
                <p className="text">{message.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="input-field">
        <input
          type="text"
          onChange={(e) => setCurrentMessage(e.target.value)}
          value={currentMesage}
        />
        <motion.div
          className="send-button"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          whileHover={{ backgroundColor: "#23f7dd" }}
          onClick={handleMessageSend}
        >
          <motion.p
            animate={{ color: isButtonHovered ? "#282936" : "#23f7dd" }}
          >
            Send
          </motion.p>
        </motion.div>
      </div>
    </StyledChatBox>
  );
};

export default ChatBox;
