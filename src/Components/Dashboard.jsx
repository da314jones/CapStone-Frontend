import React, { useEffect, useState, useCallback } from "react";
import Modal from './Modal';
import Video from "./Video";
import DashboardFilter from "./DashboardFilter";
import "./Dashboard.css";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [thumbnails, setThumbnails] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('')

console.log(selectedVideo)
  useEffect(() => {
    fetch(`${API}/videos/index-thumbnails`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueThumbnails = Array.from(new Map(data.thumbnailImage.map(item => [`${item.user_id}-${item.category}-${item.created_at}`, item])).values());
        console.log("Unique filtered thumbnails:", uniqueThumbnails);
        setThumbnails(uniqueThumbnails);      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleVideoClick = useCallback(async (thumbnailKey) => {

    try {
      const videoKey = thumbnailKey.replace('.png', '.mp4');
      const response = await fetch(`${API}/videos/signedVideoUrl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ videoKey })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch signed URL');
      }
      const data = await response.json();
      console.log("Video key:", data.signedUrl)

      setSelectedVideo(data.signedUrl);
      setIsModalOpen(true);
      console.log(data);
    } catch (error) {
      console.error("Error fetching or signing URL:", error);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="main-container">


      {filter && <>       
      <div className="videoList-container">
        {thumbnails.map((thumbnail, index) => {
          const key = `${thumbnail.thumbnail_key}-${index}`;
          console.log("Rendering thumbnail with key:", key);
          return (
            <div key={key} style={{ width: '300px', height: '300px' }} className="video-card bg-white h-94 mb-{20} rounded-lg overflow-hidden shadow-lg m-6" onClick={() => handleVideoClick(thumbnail.thumbnail_key)}>
              <img src={thumbnail.thumbnailUrl} alt={thumbnail.title || "Thumbnail"} className="thumbnail" loading="lazy" />
              <p classsName="text-black-700 z-20 ht-106"  >{thumbnail.title}</p>
            </div>
          );
        })}
      </div>
      {isModalOpen && selectedVideo && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <Video videoSrc={selectedVideo} onClose={handleCloseModal} />
        </Modal>
      )}
      
    </>}
    {!filter && <DashboardFilter setFilter={setFilter} filter={filter}/>}
    </div>
  );
}