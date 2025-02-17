import React from "react";
import EventHeader from "./EventHeader";
import CoordinatorSection from "./CoordinatorSection";
import ContractorList from "./ContractorList";
import PositionsTable from "./PositionsTable";
import "./EventPage.css";
import EventDetails from "./EventDetails";

function EventPage() {
  const handleSubmit = () => {
    alert("Form submitted!"); // Replace with actual submission logic
  };

  return (
    <>
      <div className="event-page">
        <EventHeader />
        <div className="content">
          <div className="left-panel">
            <div>
              <CoordinatorSection />
            </div>
            <div style={{ marginRight: "8em" }}>
              <EventDetails />
            </div>
          </div>
          <div className="right-panel">
            <ContractorList />
            <PositionsTable />
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default EventPage;
