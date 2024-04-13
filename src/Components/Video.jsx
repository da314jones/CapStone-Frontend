import react from 'react';
import "./Video.css"


export default function Video({ videoSrc }){

  return (
    <div className="video-container">
      <video controls width="750" className="video">
        <source src={videoSrc} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
