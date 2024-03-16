import React, { useEffect, useState } from 'react'

export default function StreamEditForm({ streamToEdit }) {
    const [streamData, setStreamData] = useState({
      title: '',
      summary: '',
      video_url: '',
      duration: 0,
    });

    useEffect(() => {
      setStreamData(streamToEdit);
    }, [streamToEdit]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setStreamData({ ...streamData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} className='video-edit-panel'>
        <label htmlFor="title">Edit Title</label>
        <input
        id="title" 
        type="text"
        value={videoData.title}
        onchange={handleChange} />
        <label htmlFor="description">Edit Description</label>
        <textarea
        id="description"
        value={videoData.description}
        onchange={handleChange} 
        />
        <button type="submit">Update Video</button>
    </form>
    
  )
}
