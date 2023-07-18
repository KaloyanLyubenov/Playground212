import React, { useState } from "react";
import "../styles/orderStepOne.css";
import OrderSecondStep from "./OrderSecondStep";

function OrderStepOne() {
  let [folded, setFolded] = useState(true);

  const foldUnfold = () => {
    if (folded) {
      setFolded(false);
    } else {
      setFolded(true);
    }
  };

  return (
    <>
      <div className={`first-step-container ${folded ? "" : "invisible"}`}>
        <div className="folded view">
          <p className="step-title">First Step: Details</p>
          <div className="arrow-container" onClick={foldUnfold}>
            <p>▼</p>
          </div>
        </div>
      </div>

      <div className={`first-step-container ${folded ? "invisible" : ""}`}>
        <div className="unfolded view">
          <p>Details</p>
          <div className="details-page">
            <div className="row">
              <div className="first-name container left">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="first-name"
                  placeholder="First Name"
                />
              </div>
              <div className="last-name container right">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="row">
              <div className="email container left">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="email"
                  placeholder="Email"
                />
              </div>
              <div className="phone-number container right">
                <label htmlFor="phone-number">Phone number</label>
                <input
                  type="text"
                  id="phone-number"
                  className="phone-number"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="row">
              <div className="subject container left">
                <label htmlFor="subject">Subject</label>
                <select id="subject" className="subject">
                  <option>Person</option>
                  <option>Automotive</option>
                  <option>Event</option>
                </select>
              </div>
              <div className="htmlFormat container right">
                <label htmlFor="htmlFormat">Format</label>
                <select id="htmlFormat" className="htmlFormat">
                  <option>Photoshoot</option>
                  <option>Videoshoot</option>
                </select>
              </div>
            </div>

            <div className="row last">
              <div className="car-color container left">
                <label htmlFor="phone-number">Car color</label>
                <input
                  type="text"
                  id="phone-number"
                  className="phone-number"
                  placeholder="Car color"
                />
              </div>
              <div className="arrow container right">
                <div className="arrow-container" onClick={foldUnfold}>
                  <p style={{ marginTop: 10 }}>▲</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderSecondStep />
    </>
  );
}

export default OrderStepOne;
