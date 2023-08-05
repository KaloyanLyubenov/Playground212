import React from "react";
import "../../newStyles/homePage/about.css";

function AboutUsCard() {
  return (
    <>
      <div className="about-card-container">
        <div className="about-title-container">
          <div className="first-row-container">
            <span className="row first">PASSIONATE</span>
            <span className="where">About</span>
          </div>
          <div>
            <span className="row second">PHOTOGRAPHER</span>
          </div>
          <div>
            <span className="row third">CAPTURING LIFE'S</span>
          </div>
          <div className="last-row-container">
            <span className="row fourth word1">PRECIOUS</span>
            <span className="row fourth word2"> MOMENTS</span>
          </div>
        </div>
        <div className="about-details-container">
          <div className="details-holder">
            <span className="details">
              Dedicated to creating timeless memories with a creative touch. I
              strive to reflect genuine emotions in every frame. Let me tell
              your unique story through my lens.
            </span>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">About us</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsCard;
