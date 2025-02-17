import React from "react";
import "./EventHeader.css";

function EventHeader() {
  return (
    <div className="event-header">
      <h3>Event Name <span className="sub-text">(Venue Details)</span></h3>
      <div className="nav-buttons">
        <button className="btn ">Event Details</button>
        <button className="btn active">Assign Coordinator/Coordinator</button>
        <button className="btn">Session Management</button>
        <button className="btn">Generate SOW</button>
      </div>
    </div>
  );
}

export default EventHeader;
