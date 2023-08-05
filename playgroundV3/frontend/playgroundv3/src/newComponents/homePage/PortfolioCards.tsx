import React from "react";
import "../../newStyles/homePage/portfolioCards.css";

function PortfolioCards() {
  const handleButonCLick = (url: string) => {
    window.location.href = `/portfolio/${url}`;
  };

  return (
    <>
      <div className="photography-card">
        <div className="details">
          <div className="title">
            <p>PHOTOGRAPHY PORTFOLIO</p>
          </div>
          <div className="button-holder">
            <button
              className="button"
              onClick={() => handleButonCLick("photography")}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">SEE MORE</span>
            </button>
          </div>
        </div>
      </div>
      <div className="videography-card">
        <div className="details">
          <div className="title">
            <p>VIDEOGRAPHY PORTFOLIO</p>
          </div>
          <div className="button-holder">
            <button
              className="button"
              onClick={() => handleButonCLick("videography")}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">SEE MORE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCards;
