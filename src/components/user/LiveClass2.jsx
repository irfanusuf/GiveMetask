// import React, { useEffect, useRef, useState } from 'react';
// import io from 'socket.io-client';
// import "./LiveClass2.scss"
// import { useParams } from 'react-router-dom';



// const socket = io('http://localhost:4000'); // Your server's address

// const VideoComponent = () => {

//   const {roomId} = useParams()
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();

//   const [peerConnection, setPeerConnection] = useState(null);
//   const [isStreaming, setIsStreaming] = useState(false);
  
  

//   useEffect(() => {
//     const initConnection = async () => {
    
//       const pc = new RTCPeerConnection({
//         iceServers: [
//           { urls: 'stun:stun.l.google.com:19302' }, 
//         ],
//       });

//       pc.onicecandidate = (event) => {
//         if (event.candidate) {
//           socket.emit('ice-candidate', roomId, event.candidate);
//         }
//       };

//       pc.ontrack = (event) => {
//         remoteVideoRef.current.srcObject = event.streams[0];
//       };

//       setPeerConnection(pc);

//       // Join the room
//       socket.emit('join-room', roomId);

//       // Handle receiving offer
//       socket.on('offer', async (offer) => {
//         await pc.setRemoteDescription(new RTCSessionDescription(offer));
//         const answer = await pc.createAnswer();
//         await pc.setLocalDescription(answer);
//         socket.emit('answer', roomId, answer);
//       });

//       // Handle receiving answer
//       socket.on('answer', async (answer) => {
//         await pc.setRemoteDescription(new RTCSessionDescription(answer));
//       });

//       // Handle receiving ICE candidate
//       socket.on('ice-candidate', async (candidate) => {
//         try {
//           await pc.addIceCandidate(new RTCIceCandidate(candidate));
//         } catch (error) {
//           console.error('Error adding received ice candidate', error);
//         }
//       });
//     };

//     initConnection();

//     return () => {
//       if (peerConnection) {
//         peerConnection.close();
//       }
//       socket.off(); // Clean up listeners
//     };
//   }, [roomId]);

//   const startVideo = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       localVideoRef.current.srcObject = stream;
//       stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));

//     setIsStreaming(true)

//       const offer = await peerConnection.createOffer();
//       await peerConnection.setLocalDescription(offer);
//       socket.emit('offer', roomId, offer);
//     } catch (error) {
//       console.error('Error starting video', error);
//     }
//   };

//   const startScreenShare = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//       localVideoRef.current.srcObject = stream;
//       stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
    
// setIsStreaming(true)
//       const offer = await peerConnection.createOffer();
//       await peerConnection.setLocalDescription(offer);
//       socket.emit('offer', roomId, offer);
//     } catch (error) {
//       console.error('Error starting screen share', error);
//     }
//   };


//   const stopStream = () => {
//     const stream = localVideoRef.current.srcObject;
//     if (stream) {
//       const tracks = stream.getTracks();
//       tracks.forEach(track => track.stop());
//       localVideoRef.current.srcObject = null;
//     }
//     setIsStreaming(false);
    
//   };
//   return (
//     <div>
//       <video ref={localVideoRef} autoPlay playsInline muted style={{ width: '300px', margin: '10px' }} />
//       <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '300px', margin: '10px' }} />
//       <div>
//         <button onClick={startVideo}>Start Video</button>
//         <button onClick={startScreenShare}>Share Screen</button>
//         <button onClick={stopStream} disabled={!isStreaming}>Stop Stream</button>
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;
