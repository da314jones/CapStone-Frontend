// SideBar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/session"
              className="sidebar-item"
            >
              <img
                src="/createVideoIcon.png"
                alt="Create Video"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/session' ? 'scale(2)' : 'scale(1)' }}
              />
              Create Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upload"
              className="sidebar-item"
            >
              <img
                src="/uploadIcon.png"
                alt="UploadVideo"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/upload' ? 'scale(2)' : 'scale(1)' }}
              />
              Upload Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="sidebar-item"
            >
              <img
                src="/dashboardIcon.png"
                alt="Dashboard"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/dashboard' ? 'scale(2)' : 'scale(1)' }}
              />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="sidebar-item"
            >
              <img
                src="/profileIcon.png"
                alt="Profile"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/profile' ? 'scale(2)' : 'scale(1)' }}
              />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
