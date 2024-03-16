// VideoCard.jsx - 
import React from 'react';
import './VideoCard.css';

export default function VideoCard({ title, thumbnailUrl, duration, views })  {
  return (
    <div className="video-card">
      <img className="thumbnail" src={thumbnailUrl} alt={title} />
      <div className="video-info">
        <h2 className="title">{title}</h2>
        <div className="metadata">
          <span className="duration">{duration}</span>
          <span className="views">{views} views</span>
        </div>
      </div>
    </div>
  );
};
