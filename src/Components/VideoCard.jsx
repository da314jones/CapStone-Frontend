import React, { useRef, useEffect } from 'react';
import './VideoCard.css';

export default function VideoCard({ video, onSelect }) {
  if (!video) {
    console.error('Video data is null or undefined');
    return null;
  }

  const { title, thumbnailUrl, duration, views } = video;

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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => imgRef.current && observer.unobserve(imgRef.current);
  }, []);

  return (
    <div className="video-card" onClick={() => onSelect(video)}>
      <img ref={imgRef} data-src={thumbnailUrl} className="thumbnail" alt={title} loading="lazy" />
      <div className="video-info">
        <h2 className="title">{title}</h2>
        <div className="metadata">
          <span className="duration">{duration}</span>
          <span className="views">{views} views</span>
        </div>
      </div>
    </div>
  );
}
