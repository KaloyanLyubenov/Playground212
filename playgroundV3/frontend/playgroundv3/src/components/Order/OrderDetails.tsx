import { String } from "aws-sdk/clients/codebuild";
import React, { FormEvent, useState } from "react";
import "../../styles/order.css";

interface OrderDetailProps {
  mediaTypes: string[];
  formatTypes: string[];
  formatUpdate: (newPage: string) => void;
  mediaTypeUpdate: (newPage: string) => void;
}

const OrderDetails: React.FC<OrderDetailProps> = ({
  mediaTypes,
  formatTypes,
  formatUpdate,
  mediaTypeUpdate,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [mediaType, setMediaType] = useState<String>("");
  const [alert, setAlert] = useState<Map<string, boolean>>(new Map());

  const handleFormatChange = (newFormat: string) => {
    setFormat(newFormat);
    formatUpdate(newFormat);
    const newAlerts = alert;
    newAlerts.delete("format");
    setAlert(newAlerts);
  };

  const handleMediaTypeChange = (newMediaType: string) => {
    setMediaType(newMediaType);
    mediaTypeUpdate(newMediaType);
    const newAlerts = alert;
    newAlerts.delete("mediaType");
    setAlert(newAlerts);
  };

  const firstNameChange = (name: string) => {
    setFirstName(name);
    if (name === "") {
      setAlert(alert.set("firstName", true));
    } else {
      const newAlerts = alert;
      newAlerts.delete("firstName");
      setAlert(newAlerts);
    }
  };

  const lastNameChange = (name: string) => {
    setLastName(name);
    if (name === "") {
      setAlert(alert.set("lastName", true));
    } else {
      const newAlerts = alert;
      newAlerts.delete("lastName");
      setAlert(newAlerts);
    }
  };

  const emailChange = (email: string) => {
    setEmail(email);
    if (email === "") {
      setAlert(alert.set("email", true));
    } else {
      const newAlerts = alert;
      newAlerts.delete("email");
      setAlert(newAlerts);
    }
  };

  const handleSubmit = () => {
    const alerts = new Map();

    if (firstName == "") {
      alerts.set("firstName", true);
    }
    if (lastName == "") {
      alerts.set("lastName", true);
    }
    if (email == "") {
      alerts.set("email", true);
    }

    if (format === "") {
      alerts.set("format", true);
    }
    if (mediaType === "") {
      alerts.set("mediaType", true);
    }

    setAlert(alerts);

    if (alert.size != 0 || alerts.size != 0) {
      console.log("ima eroro gei");
    } else {
      console.log("brao be");
    }
  };

  return (
    <>
      <h1>Order Details</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="First Name"
          className={`input first-name ${
            alert.has("firstName") ? "" : "space"
          }`}
          onChange={(e) => firstNameChange(e.target.value)}
        />
        <label
          className={`alert first-name ${
            alert.has("firstName") ? "visible" : ""
          }`}
        >
          Improper first name
        </label>

        <input
          type="text"
          placeholder="Last Name"
          className={`input last-name ${alert.has("lastName") ? "" : "space"}`}
          onChange={(e) => lastNameChange(e.target.value)}
        />
        <label
          className={`alert last-name ${
            alert.has("lastName") ? "visible" : ""
          }`}
        >
          Improper last name
        </label>

        <input
          type="text"
          placeholder="Email"
          className={`input email ${alert.has("email") ? "" : "space"}`}
          onChange={(e) => emailChange(e.target.value)}
        />
        <label className={`alert email ${alert.has("email") ? "visible" : ""}`}>
          Improper email
        </label>

        <input
          type="text"
          placeholder="Phone number"
          className="input phone-number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <select
          name="format-type"
          id="format-type"
          defaultValue="option0"
          className={`select format ${alert.get("format") ? "" : "space"}`}
          onChange={(e) => handleFormatChange(e.target.value)}
        >
          <option value="option0" disabled>
            Select an option
          </option>
          {formatTypes &&
            formatTypes.map((formatType) => {
              return <option value={formatType}>{formatType}</option>;
            })}
        </select>
        <label
          className={`alert format ${alert.get("format") ? "visible" : ""}`}
        >
          Select a format
        </label>

        <select
          name="media-type"
          id="media-type"
          defaultValue="option0"
          className={`input media-type ${
            alert.get("mediaType") ? "" : "space"
          }`}
          onChange={(e) => handleMediaTypeChange(e.target.value)}
        >
          <option value="option0" disabled>
            Select an option
          </option>
          {mediaTypes &&
            mediaTypes.map((mediaType) => {
              return <option value={mediaType}>{mediaType}</option>;
            })}
        </select>
        <label
          className={`alert medi-type ${
            alert.get("mediaType") ? "visible" : ""
          }`}
        >
          Select subject
        </label>

        <button onClick={handleSubmit}>Submit Order</button>
      </div>
    </>
  );
};

export default OrderDetails;
