// Profile.jsx -
import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../Providers/AuthProvider";

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const user = useContext(AuthContext);
  const [myVideos, setMyVideos] = useState([]);
  console.log(user);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API}/s3/list`);
        const data = await response.json();
        setMyVideos(data.videoWithSignedUrls || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="profile-page">
    <div className="profile-info">
    <div className="profile-picture">
      {user ? (
        <img src={user.photoURL} alt="Profile" />
      ) : (
        <img src="profile-picture.jpg" alt="Profile" />
      )}
    </div>
    <div className="text_profile-details">
      <div className="text profile-name">
        {user ? (
          <h4>{user.displayName}</h4>
        ) : (
          user === null ? (
            <h1>Loading while you are signed in...</h1>
          ) : (
            <h1>Please sign in</h1>
          )
        )}
      </div>
      <h4 className="text">Skills:</h4>
      <h4 className="text">Interests:</h4>
      <button className="editbutton">Edit Profile</button>
    </div>
  </div>
<div className="profile-container">
  <div className="main-content">
    <div className="tidbits">
      <h2 className="text">Your Uploaded Tidbits</h2>
      {user ? (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {[...Array(24)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <video width="280" height="120" controls>
                <source src="dummy_video.mp4" type="video/mp4" />
                Your Browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="text-lg font-semibold mb-2">Dummy Video Title</div>
                <div className="text-sm text-gray-600">Dummy Video Creator</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-lg font-semibold mb-2">Login to see your videos</h1>
      )}
    </div>
  </div>
</div>
    </div>
  );
}

