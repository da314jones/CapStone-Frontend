import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import StyledModal from "styled-react-modal";
import "./VideoNewForm.css";

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

export default function VideoNewForm({ archiveId, onClose, isOpen, archiveUrl, onSubmitSuccess }) {
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    category: "",
    title: "",
    summary: "",
    video_url: archiveUrl,
    isPrivate: "",
  });

  console.log(archiveId)

  
  useEffect(() => {
    setVideo(prevVideo => ({ ...prevVideo, video_url: archiveUrl }));
  }, [archiveUrl])
  
  const addVideo = async () => {
    if (!user_id) {
      console.error("Firebase UID is not available.");
    }   
    console.log("metaDataObject with archiveId:", metaDataObject);
    try {
      const response = await fetch(`${API}/videos/video-metadata`, {
        method: "POST",
        body: JSON.stringify(metaDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to add metaDataObject");
      }
      const data = await response.json();
      console.log("MetaDataObject added:", data);
      // await uploadToS3(metaDataObject);

      onClose();
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting metaDataObject:", error);
    }
  };

  const handleTextChange = (event) => {
    setVideo({ ...video, [event.target.id]: event.target.value });
  };

  const isValidMetadata = (videoMeta) => {
    return (
      videoMeta.category?.trim() !== "" &&
      videoMeta.title?.trim() !== "" &&
      videoMeta.summary?.trim() !== ""
    );
  };

  console.log(archiveId);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidMetadata(video)) {
      addVideo();
    } else {
      console.error("Invalid video metadata:", video);
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
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  value={video.title}
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
                  value={video.summary}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Describe the video..."
                  required
                  className="form-input mb-4"
                  style={{ width: "100%", marginBottom: "1rem" }}
                />

                {/* <p>{video.video_url}</p> */}

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