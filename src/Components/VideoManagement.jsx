import React, { useState, useEffect } from "react";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
import "./VideoManagement.css";

const API = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_VONAGE_API_KEY;

export default function VideoManagement() {
  const [sessionId, setSessionId] = useState("");
  const [token, setToken] = useState("");
  const [otSdkReady, setOtSdkReady] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [archiveId, setArchiveId] = useState(null);
  const [videoMeta, setVideoMeta] = useState({
    category: "",
    title: "",
    summary: "",
    ai_summary: "",
    is_private: true,
  });

  const userId = sessionStorage.getItem("userUID");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.opentok.com/v2/js/opentok.min.js";
    script.onload = () => {
      setOtSdkReady(true);
      console.log("OpenTok SDK is ready.");
    };
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const startSession = async () => {
    if (!otSdkReady) {
      console.error("OpenTok SDK is not ready yet.");
      return;
    }
    const sessionRes = await fetch(`${API}/videos/session`, { method: "POST" });
    const sessionData = await sessionRes.json();
    const tokenRes = await fetch(
      `${API}/videos/token/${sessionData.sessionId}`
    );
    const tokenData = await tokenRes.json();
    setSessionId(sessionData.sessionId);
    setToken(tokenData.token);
    setIsConnected(true);
    console.log("Session started with Session ID:", sessionData.sessionId);
  };

  const startRecording = async () => {
    console.log(userId);
    if (!isConnected) {
      console.error("Session not connected yet.");
      return;
    }
    try {
      const response = await fetch(`${API}/videos/start-recording`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, user_id: userId }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setIsRecording(true);
      setArchiveId(data.archiveId);
      console.log("Recording started with Archive ID:", data.archiveId);
    } catch (error) {
      console.error("Failed to start recording:", error.message);
    }
  };

  const stopRecording = async () => {
    console.log(userId);
    console.log(archiveId);
    if (!archiveId) {
      console.error("Archive ID is not defined.");
      return;
    }
    try {
      const response = await fetch(`${API}/videos/stop-recording`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archiveId, user_id: userId }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setIsRecording(false);
      console.log("Recording stopped for Archive ID:", archiveId);
    } catch (error) {
      console.error("Failed to stop recording:", error.message);
    }
  };

  const handleTextChange = (e) => {
    setVideoMeta({ ...videoMeta, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archiveId) {
      alert("Archive ID is required for submission.");
      return;
    }
    const response = await fetch(`${API}/videos/uploadVideo/${archiveId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...videoMeta, archiveId, user_id: userId }),
    });
    setArchiveId(null);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to submit video metadata: ${errorText}`);
    }
    console.log("Video metadata submitted successfully!");
  };

  return (
    <div className="session-wrapper">
      <div className="video-form-wrapper">
        <div className="video-container">
          {!isConnected ? (
            <button className="connect-session" onClick={startSession}>
              Connect Session
            </button>
          ) : (
            <OTSession
              apiKey={apiKey}
              sessionId={sessionId}
              token={token}
              onError={(error) => console.error(error)}
            >
              <OTPublisher properties={{ width: 800, height: 500 }} />
              <OTStreams>
                <OTSubscriber />
              </OTStreams>
              {!isRecording ? (
                <button className="video-button" onClick={startRecording}>
                  Start Recording
                </button>
              ) : (
                <button className="video-button" onClick={stopRecording}>
                  Stop Recording
                </button>
              )}
              <button
                className="video-button"
                onClick={() => setIsConnected(false)}
              >
                End Session
              </button>
            </OTSession>
          )}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              value={videoMeta.title}
              onChange={handleTextChange}
              placeholder="Title"
              required
            />
            <select
              name="category"
              value={videoMeta.category}
              onChange={handleTextChange}
              required
            >
              <option value="">Select Category</option>
              <option value="wood-work">Wood Work</option>
              <option value="tech">Tech</option>
              <option value="fried-cooking">Fried Cooking</option>
              <option value="hunting">Hunting</option>
              <option value="painting">Painting</option>
              <option value="astrology">Astrology</option>
              <option value="gardening">Gardening</option>
              <option value="pastries">Pastries</option>
              <option value="latin-dance">Latin Dance</option>
              <option value="literature">Literature</option>
              <option value="gaming">Gaming</option>
              <option value="economics">Ecomonomics</option>
            </select>
            <textarea
              className="video-summary"
              name="summary"
              value={videoMeta.summary}
              onChange={handleTextChange}
              placeholder="Summary"
              required
            ></textarea>

            <button className="form-button" type="submit">
              Submit Video Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
