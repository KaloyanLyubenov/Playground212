import React from "react";

function OrderDetails() {
  return (
    <>
      <div>
        <label>First Name</label>
        <input></input>
      </div>
      <div>
        <label>Last Name</label>
        <input></input>
      </div>
      <div>
        <label>Email</label>
        <input></input>
      </div>
      <div>
        <label>Phone number</label>
        <input></input>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <select typeof="text" id="subject" className="subject">
          <option>Person</option>
          <option>Automotive</option>
          <option>Event</option>
        </select>
      </div>
      <div>
        <label htmlFor="format">Format</label>
        <select typeof="text" id="format" className="format">
          <option>Photoshoot</option>
          <option>Videoshoot</option>
        </select>
      </div>
    </>
  );
}

export default OrderDetails;
