import React from "react";
import "./ProfileHeader.css";
import { FaInfoCircle, FaBell } from "react-icons/fa";

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="icons">
        <FaInfoCircle className="icon" />
        <FaBell className="icon" />
      </div>
      <div className="user-info">
        <span className="greeting">Hi, <span className="username">Muhammad Asad</span></span>
        <p className="welcome-text">welcome back!</p>
      </div>
      <div className="profile-pic">
        <img
          src="./images/siva.jpeg" 
          alt="User Profile"
        />
      </div>
    </div>
  );
}

export default ProfileHeader;
