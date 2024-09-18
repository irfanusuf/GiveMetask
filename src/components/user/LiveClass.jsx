import React from "react";
import "./LiveClass.scss";
import PrivateChat from "./molecules/PrivateChat";

const LiveClass = () => {
  return (
    <div className="live-class-container">
      <div className="video-section">
        <div className="video-screen">
         
          <h1>Video Screen</h1>
        </div>
        <div className="live-comments">
          <h2>Live Comments</h2>
          <ul>
            <li>User1: This is great!</li>
            <li>User2: Loving the session!</li>
            <li>User3: Can you explain that again?</li>
          </ul>
        </div>
      </div>

      <div className="chat-section">
        <PrivateChat />
      </div>
    </div>
  );
};

export default LiveClass;
