import React, { useState } from "react";
import VideoSession from "./VideoSession";
import SideBar from "./Sidebar";
import './Dashboard.css';
// import { AuthContext } from '../Providers/AuthProvider'

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="video-session-container">
        <VideoSession />
      </div>
    </div>
  );
}
