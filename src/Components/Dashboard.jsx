import React, { useEffect, useState } from "react";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import https from "https";
import Video from "./Video";
import Modal from './Modal';
import "./Dashboard.css";


const API = import.meta.env.VITE_API_URL;

const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.AWS_AWS_SECRET_ACCESS_KEY,
  },
});
const BUCKET_NAME = import.meta.env.VITE_BUCKET_NAME


export default function Dashboard() {
  const [thumbnails, setThumbnails] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetch(`${API}/videos/index-thumbnails`)
      .then((response) => response.json())
      .then((data) => {
        setThumbnails(data.thumbnailImage);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleVideoClick = async (thumbnailKey) => {
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
      console.log(data);
     
      console.log("Video key:", data.signedUrl)
      console.log(data);

      setSelectedVideo(data.signedUrl);
      setIsModalOpen(true);
      console.log(data);

    } catch (error) {
      console.error("Error fetching or signing URL:", error);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }

  return (
    <div className="main-container">
      <div className="videoList-container">
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="video-card" onClick={() => handleVideoClick(thumbnail.thumbnail_key)}>
            <img src={thumbnail.thumbnailUrl} alt={thumbnail.title} className="thumbnail" loading="lazy" />
          </div>
        ))}
      </div>
      {isModalOpen && selectedVideo && (
        <Modal onClose={handleCloseModal}>
          {/* <Video videoSrc={selectedVideo} selectedVideo={selectedVideo} onClose={handleCloseModal} /> */}
        </Modal>
      )}
      {/*Cut and paste this block (lines 95 - ) and you will see what I saw.*}
      <video controls autoPlay muted>
      <source src={selectedVideo} type="video/mp4" />
      Your browser does not support the video tag. 
    </video>
      {*Cut and paste this block (lines - 98) and you will see what I saw.*/}
    </div>
  );
}