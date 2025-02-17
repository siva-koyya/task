import React from "react";
import "./PositionsTable.css";

const positions = Array(10).fill({
  name: "Camera 1 (Video)",
  time: "9 am - 7 pm",
  info: "LP default",
  quantity: 20,
});

function PositionsTable() {
  return (
    <div>
      <h3>Positions</h3>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Time</th>
            <th>Info</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((pos, index) => (
            <tr key={index}>
              <td>{pos.name}</td>
              <td>{pos.time}</td>
              <td>{pos.info}</td>
              <td>{pos.quantity}</td>
              <td>
                <select className="dropdown">
                  <option>Select Contractor</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PositionsTable;
