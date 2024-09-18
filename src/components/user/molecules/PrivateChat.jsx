import React, { useState } from "react";
import "./PrivateChat.scss";

const PrivateChat = () => {
  const [messages, setMessages] = useState([
    { sender: "teacher", text: "Hello! How can I help you today?" },
    { sender: "student", text: "Can you explain that topic again?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "student", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="private-chat-container">
      <div className="message-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${
              message.sender === "student" ? "student" : "teacher"
            }`}
          >
            {message.text}
            <div className="message-time">
              <span className="time">{new Date().toLocaleTimeString()}</span>
              {message.sender === "student" && (
                <span className="ticks">✔✔</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default PrivateChat;
