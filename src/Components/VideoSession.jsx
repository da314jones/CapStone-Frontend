import React, { useState, useEffect } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

const VideoSession = () => {
  const apiKey = import.meta.env.VITE_VONAGE_API_KEY;
  const API = import.meta.env.VITE_API_URL;
  const [sessionId, setSessionId] = useState('');
  const [token, setToken] = useState('');
  const [otSdkReady, setOtSdkReady] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [archiveId, setArchiveId] = useState("");


  // Dynamically load the OpenTok SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.opentok.com/v2/js/opentok.min.js';
    script.async = true;
    script.onload = () => setOtSdkReady(true);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const fetchSessionAndToken = async () => {
    try {
      const sessionRes = await fetch(`${API}/videos/session`, { method: 'POST' });
      if (!sessionRes.ok) throw new Error('Failed to fetch session');
      const sessionData = await sessionRes.json();

      const tokenRes = await fetch(`${API}/videos/token/${sessionData.sessionId}`);
      if (!tokenRes.ok) throw new Error('Failed to fetch token');
      const tokenData = await tokenRes.json();

      setSessionId(sessionData.sessionId);
      setToken(tokenData.token);
    } catch (error) {
      console.error('Error fetching session and token:', error);
    }
  };

  const startSession = async () => {
    await fetchSessionAndToken();
    setIsConnected(true);
  };

  const startRecording = async () => {
    try {
      const response = await fetch(`${API}/videos/start-recording`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      if (!response.ok) throw new Error("Failed to start recording");
      const data = await response.json();
      console.log("Recording started:", data);
      setIsRecording(true);
      console.log( data.archiveId)
      setArchiveId(data.archiveId);
    } catch (error) {
      console.log("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      if (!archiveId) throw new Error("archiveId is not defined"); // Ensure archiveId is available
      const response = await fetch(`${API}/videos/stop-recording`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ archiveId }), // Use the archiveId from the stategit dd
      });
      if (!response.ok) throw new Error("Failed to stop recording");
      const data = await response.json();
      console.log("Recording stopped:", data);
      setIsRecording(false);
      setArchiveId(""); // Optionally reset the archiveId
    } catch (error) {
      console.error("Error stopping recording:", error);
    }
};
  

  const endSession = () => {
    // Logic to clean up and reset state
    setIsConnected(false);
    // setIsRecording(false);
    setSessionId('');
    setToken('');
  };

  if (!otSdkReady) {
    return <div>Loading OpenTok SDK...</div>;
  }

  return (
    <div className="video-container">
      {isConnected ? (
        <>
          <OTSession apiKey={apiKey} sessionId={sessionId} token={token} onError={(error) => console.error(error)}>
            <OTPublisher />
            <OTStreams>
              <OTSubscriber />
            </OTStreams>
          </OTSession>
          {!isRecording ? (
            <button onClick={startRecording}>Start Recording</button>
          ) : (
            <button onClick={stopRecording}>Stop Recording</button>
          )}
          <button onClick={endSession}>End Session</button>
        </>
      ) : (
        <button onClick={startSession}>Start Session</button>
      )}
    </div>
  );
};

export default VideoSession;