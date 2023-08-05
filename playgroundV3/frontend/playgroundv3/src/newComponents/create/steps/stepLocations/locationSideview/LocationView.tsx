import React, { useState } from "react";
import { StyledContainer } from "./LocationViewStyles";
import { motion, AnimatePresence } from "framer-motion";

type LocationProps = {
  title: string;
  isSelected: boolean;
  onInfo: (title: string) => void;
  onClick?: () => void;
  onAddRemove?: () => void;
};

const LocationView: React.FC<LocationProps> = ({
  title,
  isSelected,
  onInfo,
  onClick,
  onAddRemove,
}) => {
  const [isLocationHovered, setIsLocationHovered] = useState(false);

  return (
    <StyledContainer>
      <div
        className="location"
        onMouseEnter={() => setIsLocationHovered(true)}
        onMouseLeave={() => setIsLocationHovered(false)}
        onClick={onClick}
      >
        <p style={{ display: isLocationHovered ? "none" : "block" }}>
          {title.toUpperCase()}
        </p>
        {isLocationHovered ? (
          <motion.div
            className="options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className={`${isSelected ? "remove" : "add"} option`}
              whileHover={{ x: -5, y: -5 }}
              onClick={onAddRemove}
            >
              {`${isSelected ? "Remove" : "Add"}`}
            </motion.div>
            <motion.div
              className="info option"
              whileHover={{ x: 5, y: -5 }}
              onClick={() => onInfo(title)}
            >
              Info
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </StyledContainer>
  );
};

export default LocationView;
