import React from "react";
import "../../newStyles/homePage/servicesCard.css";

const PHOTO_SERVICE_ICON = `${process.env.PUBLIC_URL}/photo-service-icon.png`;
const VIDEO_SERVICE_ICON = `${process.env.PUBLIC_URL}/video-service-icon.png`;
const EDITING_SERVICE_ICON = `${process.env.PUBLIC_URL}/editing-service-icon.png`;

function ServicesCard() {
  return (
    <>
      <div className="services-card-holder">
        <div className="services-container">
          <div className="services-list">
            <div className="container photography">
              <div
                className="box"
                style={{ backgroundImage: `url(${PHOTO_SERVICE_ICON})` }}
              ></div>
              <p className="service-title">PHOTOGRAPHY</p>
            </div>
            <div className="container videography">
              <div
                className="box"
                style={{ backgroundImage: `url(${VIDEO_SERVICE_ICON})` }}
              ></div>
              <p className="service-title">VIDEOGRAPHY</p>
            </div>
            <div className="container editing">
              <div
                className="box"
                style={{ backgroundImage: `url(${EDITING_SERVICE_ICON})` }}
              ></div>
              <p className="service-title">VIDEO EDITING</p>
            </div>
          </div>
          <div className="services-button">
            <button className="button">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">SERVICES</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
