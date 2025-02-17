import React from "react";
import "./CoordinatorSection.css";

function CoordinatorSection() {
  return (
    <div className="coordinator-section">
      <h3>Assign Coordinator</h3>
      <select className="dropdown">
        <option>Select Coordinator</option>
      </select>
      <button className="add-btn">Add New Coordinator</button>
    </div>
  );
}

export default CoordinatorSection;
