import React, { useState } from "react";
import "./SideBar.css";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";

function SideBar() {
  const [openSections, setOpenSections] = useState({
    events: true,
    users: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="sidebar">
      <div className="section" onClick={() => toggleSection("events")}>
        <p>Events</p>
        {openSections.events ? <FaAngleDown /> : <FaAngleRight />}
      </div>
      <ul className={`menu-list ${openSections.events ? "open" : ""}`}>
        <li className="menu-item">
          <span className="line"></span> New Requests <span className="badge">9</span>
        </li>
        <li className="menu-item"><span className="line"></span> Estimate</li>
        <li className="menu-item"><span className="line"></span> Events</li>
        <li className="menu-item"><span className="line"></span> Partial Requests</li>
      </ul>

      <div className="section"><p>Positions</p></div>
      <div className="section"><p>Contractors</p></div>

      <div className="section" onClick={() => toggleSection("users")}>
        <p>Users</p>
        {openSections.users ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      <ul className={`menu-list ${openSections.users ? "open" : ""}`}>
        <li className="menu-item"><span className="line"></span> Admins</li>
        <li className="menu-item"><span className="line"></span> Clients</li>
        <li className="menu-item"><span className="line"></span> Coordinators</li>
      </ul>
      <div className="section"><p>Profile</p></div>

      
      <button className="logout-btn" onClick={() => alert("Logging out...")}>
        Logout
      </button>
    </div>
  );
}

export default SideBar;
