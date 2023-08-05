import React, { useState } from "react";
import { InfoContainer } from "./InfoBoxStyling";
import CancelIcon from "@mui/icons-material/Cancel";
import { AnimatePresence, motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";

type Location = {
  id: number;
  title: string;
  description: string;
  timeOfDay: string;
  lat: number;
  lng: number;
};

type InfoBoxProps = {
  location: Location;
  format: string;
  onClose: () => void;
};

const InfoBox: React.FC<InfoBoxProps> = ({ location, format, onClose }) => {
  const [bestFortext, setBestForText] = useState(
    `${location.timeOfDay === "day" ? "Day time" : "Night time"} ${format}`
  );
  return (
    <AnimatePresence>
      <InfoContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="info-container"
        >
          <div className="location-title">
            <div className="minimise" onClick={onClose}>
              <CancelIcon />
            </div>
            <h1>{location.title}</h1>
          </div>
          <div className="location-description">
            <p>{location.description}</p>
          </div>
          <div className="best-for">
            <p>Best for: {bestFortext}</p>
          </div>
        </motion.div>
      </InfoContainer>
    </AnimatePresence>
  );
};

export default InfoBox;
