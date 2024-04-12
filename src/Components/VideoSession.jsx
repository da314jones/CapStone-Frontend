// import React, { useState, useEffect } from "react";
// import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
// import { useArchiveId } from "../Pages/New";  // Adjust the path as needed to correctly import your context
// import { AutoScaling } from "aws-sdk";


// const apiKey = import.meta.env.VITE_VONAGE_API_KEY;
// const API = import.meta.env.VITE_API_URL;

// export default function VideoSession() {
//   const [sessionId, setSessionId] = useState("");
//   const [token, setToken] = useState("");
//   const [otSdkReady, setOtSdkReady] = useState(false);
//   const [isConnected, setIsConnected] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);

//   const { archiveId, setArchiveId } = useArchiveId();  // Using context to manage the archive ID

//   // Dynamically load the OpenTok SDK
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://static.opentok.com/v2/js/opentok.min.js";
//     script.async = true;
//     script.onload = () => setOtSdkReady(true);
//     document.head.appendChild(script);
//     return () => document.head.removeChild(script);
//   }, []);
  const fetchSessionAndToken = async () => {
    try {
      const sessionRes = await fetch(`${API}/videos/session`, {
        method: "POST",
        body: user
      });
      if (!sessionRes.ok) throw new Error("Failed to fetch session");
      const sessionData = await sessionRes.json();

//   const user_id = sessionStorage.getItem('userUID');

//   useEffect(() => {
//     fetchSessionAndToken();
//   }, []);

//   const fetchSessionAndToken = async () => {
//     try {
//       const sessionRes = await fetch(`${API}/videos/session`, {
//         method: "POST",
//       });
//       if (!sessionRes.ok) throw new Error("Failed to fetch session");
//       const sessionData = await sessionRes.json();
      setSessionId(sessionData.sessionId);
      console.log(sessionData.sessionId);
      setToken(tokenData.token);
      console.log(sessionData, tokenData);
    } catch (error) {
      console.error("Error fetching session and token:", error);
    }
  };
  console.log(fetchSessionAndToken)
  const startSession = async () => {
    await fetchSessionAndToken();
    setIsConnected(true);
  };

//       const tokenRes = await fetch(`${API}/videos/token/${sessionData.sessionId}`);
//       if (!tokenRes.ok) throw new Error("Failed to fetch token");
//       const tokenData = await tokenRes.json();

//       setSessionId(sessionData.sessionId);
//       setToken(tokenData.token);
//       setIsConnected(true);  // Setting connected status once session and token are ready
//     } catch (error) {
//       console.error("Error fetching session and token:", error);
//     }
//   };

//   const startSession = () => {
//     if (!sessionId || !token) {
//       console.error("Session or Token not yet fetched.");
//       return;
//     }
//     setIsConnected(true);
//   };

//   const startRecording = async () => {
//     if (!isConnected) {
//       console.error("Session not connected yet");
//       return;
//     }
//     try {
//       const response = await fetch(`${API}/videos/start-recording`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ sessionId, user_id }),
//       });
//       const data = await response.json();
//       setIsRecording(true);
//       setArchiveId(data.archiveId);
//       console.log('Recording started, archiveID:', data.archiveId);
//     } catch (error) {
//       console.error("Error starting recording:", error);
//     }
//   };

//   const stopRecording = async () => {
//     if (!archiveId) {
//       console.error("Archive ID is not defined");
//       return;
//     }
//     try {
//       const response = await fetch(`${API}/videos/stop-recording`, {
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify({ archiveId, user_id }),
//       });
//       if (!response.ok) throw new Error("Failed to stop recording");
//       const data = await response.json();
//       setIsRecording(false);
//       setArchiveId(null);  // Clearing archiveId after stopping recording
//       console.log("Recording stopped:", data);
//     } catch (error) {
//       console.error("Error stopping recording:", error);
//     }
//   };

//   const endSession = () => {
//     setIsConnected(false);
//     setSessionId("");
//     setToken("");
//   };

//   if (!otSdkReady) {
//     return <div>Loading OpenTok SDK...</div>;
//   }

//   return (
//     <div className="video-container">
//       {isConnected && (
//         <OTSession apiKey={apiKey} sessionId={sessionId} token={token} onError={(error) => console.error(error)}>
//           <OTPublisher properties={{ width: 400, height: 300 }} />
//           <OTStreams>
//             <OTSubscriber />
//           </OTStreams>
//           {!isRecording ? (
//             <button onClick={startRecording}>Start Recording</button>
//           ) : (
//             <button onClick={stopRecording}>Stop Recording</button>
//           )}
//           <button onClick={endSession}>End Session</button>
//         </OTSession>
//       )}
//       {!isConnected && <button onClick={startSession}>Start Session</button>}
//     </div>
//   );
// }
