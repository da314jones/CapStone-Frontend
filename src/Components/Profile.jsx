// Profile.jsx - 
import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
    <div className="sidebar">
      <div className="sidebar-icon">Broadcast</div>
      <div className="sidebar-icon">Index</div>
      <div className="sidebar-icon">Settings</div>
    </div>
    <div className="main-content">
      <div className="top-section">
        <div className="logo">
          <img src="logo-image.jpg" alt="Your Logo" />
        </div>
        <div className="profile-info">
          <div className="profile-picture">
            <img src="profile-picture.jpg" alt="Profile" />
          </div>
          <div className="profile-name">Your Name</div>
        </div>
      </div>
      <div className="profile-details">
        <div>Location:</div>
        <div>Skills:</div>
        <div>Interests:</div>
        <button>Edit Profile</button>
      </div>
      <div className="tidbits">
        <h2>Your Uploaded Tidbits</h2>
        {/* Video cards */}
      </div>
      <div className="tidbits">
        <h2>Saved Tidbits</h2>
        {/* Video cards */}
      </div>
    </div>
    <div className="message-button">Message</div>
  </div>
  );
}
