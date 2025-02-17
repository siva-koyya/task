import React from "react";
import "./EventDetails.css";

function EventDetails() {
  return (
    <div className="event-details">
      <h3 className="event-title">
        Event Name <span className="venue-details">(Venue Here)</span>
      </h3>

      <div className="event-dates">
        <div className="date-box">
          <span className="label">Start:<span className="date"> 12-12-2023</span></span>
          <span className="label">Ends: <span className="date"> 15-12-2023</span></span>
        </div>
      </div>

      <div className="venue-box">
        <span className="label">Venue Address:</span>
        <span className="venue-info"> Some Location 12, Name Here, City, State.</span>
      </div>
    </div>
  );
}

export default EventDetails;
