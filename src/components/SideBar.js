import React, { useState } from "react";
import "./SideBar.css";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import EventPage from "./EventPage";

function SideBar() {
  const [openSections, setOpenSections] = useState({
    events: true,
    users: false,
  });

  const [pageNav, setPageNav] = useState("");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div style={{ width: "95%", display: "flex", padding: "1em", gap: "0.5em", height: "90vh" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="section" onClick={() => { setPageNav(""); toggleSection("events"); }}>
          <p>Events</p>
          {openSections.events ? <FaAngleDown /> : <FaAngleRight />}
        </div>
        <ul className={`menu-list ${openSections.events ? "open" : ""}`}>
          <li className="menu-item"><span className="line"></span> New Requests <span className="badge">9</span></li>
          <li className="menu-item"><span className="line"></span> Estimate</li>
          <li className="menu-item"><span className="line"></span> Events</li>
          <li className="menu-item"><span className="line"></span> Partial Requests</li>
        </ul>

        <div className="section" onClick={() => setPageNav("Position")}><p>Positions</p></div>
        <div className="section" onClick={() => setPageNav("Contractors")}><p>Contractors</p></div>

        <div className="section" onClick={() => { toggleSection("users"); setPageNav("Users"); }}>
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

      {/* Event Page Section */}
      {/* <div className="event-container"> */}
        <EventPage navType={pageNav} />
      {/* </div> */}
    </div>
  );
}

export default SideBar;
