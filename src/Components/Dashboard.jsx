import React, { useEffect, useState } from "react";
import Video from "./Video";
import Modal from "./Modal";
import "./Dashboard.css";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [staticVideoSrc, setStaticVideoSrc] = useState("");


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



  const handleStaticS3Key = async () => {
    const staticS3Key = "user/kzu3X1fTlFRIdmQ2weWqNakbULB2/H-J-H-K-H.mp4";
    try {
      const response = await fetch(`${API}/get-video/${staticS3Key}`);
      const data = await response.json();
      if (response.ok && data.signedVideoUrl) {
        console.log("Data:", data);
        setStaticVideoSrc(data.signedVideoUrl); // Ensure this is setting the video URL correctly
      } else {
        throw new Error(data.message || "Signed URL missing in response");
      }
    } catch (error) {
      console.error("Error fetching video URL:", error);
    }
  };

  // const handleSelectVideo = async (video) => {
  //   console.log(video.s3_key);
  //   const s3KeyEncoded = encodeURIComponent(video.s3_key);
  //   const url = `${API}/getVideo/${s3KeyEncoded}`;
  //   console.log("Requesting signed URL from:", url);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     if (response.ok) {
  //       if (data.signedVideoUrl) {
  //         setSelectedVideo({ ...video, videoSrc: data.signedVideoUrl });
  //         setIsModalOpen(true);
  //       } else {
  //         throw new Error(" Signed URL missing in response");
  //       }
  //     } else {
  //       throw new Error(data.message || "Failed to fetch videoURL");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching video URL:", error);
  //   }
  // };



  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="main-container">
      <div className="videoList-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-card"
            onClick={() => handleSelectVideo(video)}
          >
            <img
              src={video.signedUrl}
              className="thumbnail"
              alt={video.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
  
        <div className="video-container">
          <video controls width="750" className="video">
            <source src={staticVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <button onClick={handleStaticS3Key}>Load Static Video</button>
</div>
  );
}


{/* {isModalOpen && (
        <Modal onClose={handleCloseModal} show={isModalOpen}>
          <Video videoSrc={selectedVideo.videoSrc} onClose={handleCloseModal} />
        </Modal>
      )} */}