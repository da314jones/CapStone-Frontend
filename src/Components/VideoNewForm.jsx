import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StyledModal from "styled-react-modal";
import "./VideoNewform.css";

const API = import.meta.env.VITE_API_URL;

const StyledFormModal = StyledModal.styled`
display: flex;
flex-direction: colimn;
justify-content: center;
align-items: center;
background-color: white;
padding: 20px;
border-radius: 8px;
max-width: 500px;
width: 90%
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function VideoNewForm({ onClose, isOpen, onSubmitSuccess }) {
  const navigate = useNavigate();
  const [videoMeta, setVideoMeta] = useState({
    category: "",
    title: "",
    summary: "",
    isPrivate: true,
  });

  const archiveId = localStorage.getItem('archiveId');


  const addVideo = async () => {
    console.log('Submitting with archiveId:', archiveId);

    if (!archiveId) {
      console.error('Archive ID is undefined.:');
      return
    }
    try {
      console.log('Submitting with archiveId:', archiveId);
      const response = await fetch(`${API}/videos/uploadVideo/${archiveId}`, {
        method: "POST",
        body: JSON.stringify({ ...videoMeta, archiveId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to add videoMetaObject");
      }
      const data = await response.json();
      console.log("MetaDataObject added:", data);
      
      onClose();
      onSubmitSuccess();
      localStorage.removeItem('archiveId');
    } catch (error) {
      console.error("Error submitting metaDataObject:", error);
    }
  };

  
  
  const handleTextChange = (e) => {
    setVideoMeta({ ...videoMeta, [e.target.id]: e.target.value });
  };

  const isValidMetadata = (videoMeta) => {
    return (
      videoMeta.category?.trim() !== "" &&
      videoMeta.title?.trim() !== "" &&
      videoMeta.summary?.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data being submitted:', videoMeta);
      if (isValidMetadata(videoMeta)) {
      addVideo();
    } else {
      console.error("Invalid video metadata:", videoMeta);
    }
  };

  return (
    <StyledFormModal
      isOpen={isOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <div className="modal-overlay">
        <div className="modal-content">
          <>
            <div className="container mx-auto mt-8">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-pink-300 text-black p-2 rounded shadow-md"
              >

                <label htmlFor="category">Category:</label>
                <input
                  id="category"
                  value={videoMeta.category}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter Category..."
                  required
                  className="form-input mb-4"
                  style={{ width: "100%", marginBottom: "1rem" }}
                />  

                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  value={videoMeta.title}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter Title..."
                  required
                  className="form-input mb-4"
                  style={{ width: "100%", marginBottom: "1rem" }}
                />

                <label htmlFor="summary">Summary:</label>
                <input
                  id="summary"
                  value={videoMeta.summary}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Describe the video..."
                  required
                  className="form-input mb-4"
                  style={{ width: "100%", marginBottom: "1rem" }}
                />

                <div>
                  <button
                    type="submit"
                    className="bg-pink-300 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-black active:bg-black-800"
                  >
                    Add Video
                  </button>
                </div>
              </form>
              <button onClick={onClose} className="close-button">
                Close Form
              </button>
            </div>
          </>
        </div>
      </div>
    </StyledFormModal>
  );
}