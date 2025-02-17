import React, { useState, useEffect } from "react";
import EventHeader from "./EventHeader";
import CoordinatorSection from "./CoordinatorSection";
import ContractorList from "./ContractorList";
import PositionsTable from "./PositionsTable";
import EventDetails from "./EventDetails";
import "./EventPage.css";
import ProfileHeader from "./ProfileHeader";

function EventPage({ navType }) {
  const [page, setPage] = useState(navType);

  useEffect(() => {
    setPage(navType);
  }, [navType]); // Update component when navType changes

  const handleSubmit = () => {
    alert("Form submitted!"); // Replace with actual submission logic
  };

  let component;
  switch (page) {
    case "Position":
      component = <PositionsTable />;
      break;
    case "Contractors":
      component = <ContractorList />;
      break;
    case "Users":
      component = <CoordinatorSection />;
      break;
      case "Profile":
        component = <ProfileHeader />;
        break;
    default:
      component = null;
  }

  return (
    <div className="event-page">
      {page === "" ? (
        <>
          <EventHeader />
          <div className="content">
            <div className="left-panel">
              <CoordinatorSection />
              <div style={{ marginRight: "8em" }}>
                <EventDetails />
              </div>
            </div>
            <div className="right-panel">
              <ContractorList />
              <PositionsTable />
            </div>
          </div>
          <div className="submit-container">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      ) : (
        component
      )}
    </div>
  );
}

export default EventPage;
