import React from "react";
import "../../newStyles/homePage/letsCreate.css";

function LetsCreate() {
  const handleCreateClick = () => {
    window.location.assign("/create");
  };

  return (
    <>
      <div className="lets-create-container">
        <div className="details">
          <div className="title-container">
            <div className="title">
              <p>LET'S CREATE TOMOROW TODAY</p>
            </div>
            <div className="buttons">
              <button className="button">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">CONTACT</span>
              </button>
              <button className="button" onClick={handleCreateClick}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">CREATE</span>
              </button>
            </div>
          </div>
          <div className="offices-container">
            <span className="where">Offices</span>
            <span className="office-address">Sofia, Bulgaria</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsCreate;
