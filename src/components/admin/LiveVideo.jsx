import React, { useRef, useState } from "react";
import "./LiveVideo.scss"

const LiveVideo = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

 
  const startCameraStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsStreaming(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };


  const startScreenRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsStreaming(true);
    } catch (err) {
      console.error("Error accessing screen recording:", err);
    }
  };

  const stopStream = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsStreaming(false);
  };

  return (
    <div className="live-video-container">
      <video ref={videoRef} autoPlay playsInline muted className="video-screen" />
      <div className="controls">
        <button onClick={startCameraStream} disabled={isStreaming}>Start Camera</button>
        <button onClick={startScreenRecording} disabled={isStreaming}>Start Screen Recording</button>
        <button onClick={stopStream} disabled={!isStreaming}>Stop Stream</button>
      </div>
    </div>
  );
};

export default LiveVideo;
