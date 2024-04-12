import React, { useEffect, useState } from "react";
import Video from "./Video";
import Modal from './Modal';
import "./Dashboard.css";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API}/videos/index-thumbnails`);
        const data = await response.json();
        if (response.ok) {
          console.log("Fetched videos:", data);
          setVideos(data.thumbnailSignedUrls || []);
        } else {
          throw new Error(data.message || "Failed to fetch videos");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleSelectVideo = (video) => {
    setSelectedVideo({ ...video, videoSrc: video.signedUrl });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }

  return (
    <div className="main-container">
      <div className="videoList-container">
        {videos.map((video, index) => (
          <div key={index} className='video-card' onClick={() => handleSelectVideo(video)}>
            <img src={video.signedUrl} className="thumbnail" alt={video.title} loading="lazy" />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Video videoSrc={selectedVideo.videoSrc} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
