import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import api from "../utils/AxiosInstance";

// const socket = io("https://algoacademy.onrender.com");

const socket = io("http://localhost:4000");


const InteractPanel = (props) => {



    const [recipientId, setRecipientId] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [userId , setUserId] =useState("")
    const [onlineUsers, setOnlineUsers] = useState([]);



    const getUserData = async () => {
        try {
          const res = await api.get(`/user/getUser`);
          setUserId(res.data.id);
          console.log(userId)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getUserData();
      }, [props.change]);

  
    useEffect(() => {
      // Register the user when the component mounts
      socket.emit('register', userId);
  
      // Listen for incoming private messages
      socket.on('private_message', ({ senderId, message }) => {
        setMessages((prevMessages) => [...prevMessages, { senderId, message }]);
      });
  
          // Listen for updates to the list of online users
       socket.on('online_users', (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.off('private_message');
        socket.off('online_users');
      };
    }, [userId]);
  
    const handleSendMessage = () => {
      socket.emit('private_message', { senderId: userId, recipientId, message });
      setMessages((prevMessages) => [...prevMessages, { senderId: 'You', message }]);
    };
  
    return (
      <div>
        <h2>Chat App</h2> 
        <h2>MY _id : {userId}</h2>
        <div>
          <input
            type="text"
            placeholder="Recipient User ID"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>

        <div>
        <h3>Online Users</h3>
        <ul>
          {onlineUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>

        <div>
          <h3>Messages</h3>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>
                <strong>{msg.senderId}:</strong> {msg.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default InteractPanel;
