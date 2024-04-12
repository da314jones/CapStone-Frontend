// SideBar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";
import { FaFileUpload } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { ImProfile } from "react-icons/im";
import { MdCreateNewFolder } from "react-icons/md";

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
              {/* <img
                src="/createVideoIcon.png"
                alt="Create Video"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/session' ? 'scale(1.3)' : 'scale(1)' }}
              /> */}
              <MdCreateNewFolder style={{ transform: location.pathname  === '/session' ? 'scale(1.3)' : 'scale(1)' }}
              /> 
              Create Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upload"

              // activeClassName="active"
              className="sidebar-item"
            >
              {/* <img
                src="/uploadIcon.png"
                alt="UploadVideo"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/upload' ? 'scale(1.6)' : 'scale(1)' }}
              /> */}
              <FaFileUpload style={{ transform: location.pathname  === '/upload' ? 'scale(1.6)' : 'scale(1)' }} />
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"

              // activeClassName="active"
              className="sidebar-item"
            >
              {/* <img
                src="/dashboardIcon.png"
                alt="Dashboard"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/dashboard' ? 'scale(1.2)' : 'scale(1)' }}
              /> */}
              <RxDashboard style={{ transform: location.pathname  === '/dashboard' ? 'scale(1.2)' : 'scale(1)' }} />
              DB
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"

              // activeClassName="active"
              className="sidebar-item"
            >
              {/* <img
                src="/profileIcon.png"
                alt="Profile"
                className="sidebar-icon"
                style={{ transform: location.pathname  === '/profile' ? 'scale(1.3)' : 'scale(1)' }}
              /> */}
              <ImProfile style={{ transform: location.pathname  === '/profile' ? 'scale(1.3)' : 'scale(1)' }} />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}