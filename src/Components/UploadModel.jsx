import React, { useState } from 'react'
const API = import.meta.env.VITE_API_KEY

export default function UploadModel() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [userId, setUserId] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const  [videoSummary, setVideoSummary] = useState("");
    const [videoPrivacy, setVideoPrivacy] = useState(false);

    // Simplified example of form submission with fetch API in React
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('file', selectedFile); 
        formData.append('userId', userId); 
        formData.append('title', videoTitle); 
        formData.append('summary', videoSummary); 
        formData.append('is_private', videoPrivacy); 
        // Add more fields as necessary
        
        try {
            const response = await fetch(`/${API}/s3/upload`, { 
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful', data);
                // Handle successful upload, e.g., redirecting the user or showing a success message
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading video:', error);
            // Handle upload error, e.g., showing an error message
        }
    };
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
             />
            <input
            type="text"
            value={videoTitle} onChange={(e) => setVideoTitle(e.target.value[0])}
            placeholder="Title"
             />
             <textarea value={videoSummary} onChange={(e) => setVideoSummary(e.target.value[0])}
             placeholder="Summary"></textarea>
             <label>
                <input
                type="checkbox"
                checked={videoPrivacy}
                onChange={(e) => setVideoPrivacy(e.target.checked[0])}
                />
                Private
             </label>
             <button type="submit">Upload Video</button>
        </form>
      </div>
    )
  }