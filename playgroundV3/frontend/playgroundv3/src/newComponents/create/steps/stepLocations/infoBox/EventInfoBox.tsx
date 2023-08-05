import React, { useState } from "react";
import { InfoContainer } from "./EventInfoStyles";
import CancelIcon from "@mui/icons-material/Cancel";
import { AnimatePresence, motion } from "framer-motion";
import BigEventInput from "../../../smallComponents/bigInput/BigEventInput";

type LatLngLiteral = google.maps.LatLngLiteral;

type LocationDetails = {
  title: string;
  position: LatLngLiteral;
  description: string;
  type: string;
  format: string;
  timeOfDay: string;
};

type InfoBoxProps = {
  location: LocationDetails;
  format: string;
  onClose: () => void;
  onClick: (title: string, description: string) => void;
};

const EventInfoBox: React.FC<InfoBoxProps> = ({
  location,
  onClose,
  onClick,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    if (title !== "" && description !== "") {
      onClick(title, description);
    }
  };

  return (
    <AnimatePresence>
      <InfoContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="info-container"
        >
          <div className="minimise" onClick={onClose}>
            <CancelIcon />
          </div>
          <div className="location-title">
            <BigEventInput text={location.title} onChange={setTitle} />
          </div>
          <div className="location-description">
            <BigEventInput
              text={location.description}
              onChange={setDescription}
            />
          </div>
        </motion.div>
        <motion.div
          className="submit-details-button"
          whileHover={{ boxShadow: "2px 0 5px 1px #23f7dd", outline: "none" }}
          onClick={handleClick}
        >
          <p>Submit</p>
        </motion.div>
      </InfoContainer>
    </AnimatePresence>
  );
};

export default EventInfoBox;
