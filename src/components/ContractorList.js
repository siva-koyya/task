import React from "react";
import "./ContractorList.css";

const rooms = [
  { id: 1, name: "Meeting Room 1", positions: 12, start: "Jan 12, 2023", end: "Jan 15, 2023" },
  { id: 2, name: "Meeting Room 2", positions: 9, start: "Jan 12, 2023", end: "Jan 15, 2023" },
  { id: 3, name: "Meeting Room 3", positions: 12, start: "Jan 12, 2023", end: "Jan 15, 2023" },
  { id: 4, name: "Meeting Room 4", positions: 9, start: "Jan 12, 2023", end: "Jan 15, 2023" },
  { id: 5, name: "Meeting Room 5", positions: 12, start: "Jan 12, 2023", end: "Jan 15, 2023" },
];

function ContractorList() {
  return (
    <span className="contractor-list">
      <h3>Assign Contractor</h3>
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="room-header">
            {room.name} <span className="positions">{room.positions} Positions</span>
          </div>
          <p className="room-dates">
            Start: {room.start} - Ends: {room.end}
          </p>
        </div>
      ))}
    </span>
  );
}

export default ContractorList;
