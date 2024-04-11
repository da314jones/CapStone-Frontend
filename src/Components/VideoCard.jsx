import React, { useRef, useEffect } from 'react';
import './VideoCard.css';

export default function VideoCard({ video, onSelect }) {
  if (!video) {
    console.error('Video data is null or undefined');
    return null;
  }

  const { title, thumnailUrl, duration, views } = video;
  if (!thumbnailUrl) {
    console.error('Thumbnail URL is missing for video:', title);
    return null;
  }
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.01 });

    imgRef.current && observer.observe(imgRef.current);
    return () => imgRef.current && observer.unobserve(imgRef.current);
  }, []);

  return (
    <div className="video-card" onClick={() => onSelect(video)}>
      <img ref={imgRef} data-src={video.thumbnailUrl} className="thumbnail" alt={video.title} loading="lazy" />
      <div className="video-info">
        <h2 className="title">{video.title}</h2>
        <div className="metadata">
          <span className="duration">{video.duration}</span>
          <span className="views">{video.views} views</span>
        </div>
      </div>
    </div>
  );
}
