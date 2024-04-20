import react from 'react';
// import "./Video.css"

export default function Video({ videoSrc }){
  return (
    <div className="video-modal">
    <video controls autoPlay muted>
      <source src={selectedVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button onClick={onClose}>Close</button>
    </div>
  );
};

