import { useState } from 'react';
import { useNavigate, useParams }  from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function VideoNewForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [video, setVideo] = useState({
    title: "",
    summary: "",
    video_url: "",
    duration: 0,
    created_at: ""
  });

const addVideo = () => {
    fetch(`${API}/videos/${id}`, {
      method: "POST",
          body: JSON.stringify(video),
          headers: {
              "Content-Type": "application/json",
          },
    })
    .then(() => {
      navigate(`/videos`);
    })
    .catch((error) => console.error("catch", error));
  };

const handleTextChange = (event) => {
    setVideo({ ...video, [event.target.id]: event.target.value });
};

const handleSubmit = (event) => {
      event.preventDefault();
      addVideo();
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-pink-300 text-black p-2 rounded shadow-md">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={video.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Title..."
          required
          className="form-input mb-4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <label htmlFor="summary">Summary:</label>
        <input
          id="summary"
          value={video.summary}
          type="text"
          onChange={handleTextChange}
          placeholder="Describe the video..."
          required
          className="form-input mb-4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <label htmlFor="video_url">Video URL:</label>
        <input
          id="video_url"
          value={video.video_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter video URL..."
          required
          className="form-input mb-4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <label htmlFor="duration">Duration:</label>
        <input
          id="duration"
          value={video.duration}
          type="number"
          onChange={handleTextChange}
          required
          className="form-input mb-4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <label htmlFor="created_at">Created At:</label>
        <input
          id="created_at"
          value={video.created_at}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter created date..."
          required
          className="form-input mb-4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <div>
          <button type="submit" className="bg-pink-300 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-black active:bg-black-800">
            Add Video
          </button>
        </div>
      </form>
    </div>
  );
}

