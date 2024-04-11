import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoCard from "./VideoCard";
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
        const response = await fetch(`${API}/videos/index`);
        const data = await response.json();
        if (response.ok) {
          console.log("Fetched videos:", data);
          setVideos(data.videoWithSignedUrls || []);
        } else {
          throw new Error(data.message || "Failed to fetch videos");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleSelectVideo = async (video) => {
    // This assumes you have a separate endpoint to fetch fresh signed URLs for the actual video content
    try {
      const response = await fetch(`${API}/videos/getSignedUrl/${video.s3_key}`); // Ensure this endpoint exists
      const data = await response.json();
      if (response.ok) {
        setSelectedVideo({ ...video, videoSrc: data.signedUrl });
        setIsModalOpen(true);
      } else {
        throw new Error(data.message || "Failed to fetch video URL");
      }
    } catch (error) {
      console.error('Error fetching signed URL:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="videoList-container">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} onSelect={handleSelectVideo} className="video-card" />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Video videoSrc={selectedVideo.videoSrc} />
        </Modal>
      )}
    </div>
  );
}
