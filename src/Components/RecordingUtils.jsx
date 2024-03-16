import React, { useState, useEffect } from 'react';

export default function RecordingUtils() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  // Setup for accessing user's media
  useEffect(() => {
    const constraints = { audio: true, video: true }; // Adjust based on needs
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);

        newMediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks(prev => [...prev, event.data]);
          }
        };
      })
      .catch(error => {
        console.error("Error accessing media devices:", error);
      });

    return () => mediaRecorder?.stream.getTracks().forEach(track => track.stop());
  }, []);

  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'inactive') {
      mediaRecorder.start();
      setIsRecording(true);
      setRecordedChunks([]); // Reset previous recordings
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleDownloadRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recording.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
      <button onClick={handleDownloadRecording} disabled={!recordedChunks.length}>Download Recording</button>
    </div>
  );
};

