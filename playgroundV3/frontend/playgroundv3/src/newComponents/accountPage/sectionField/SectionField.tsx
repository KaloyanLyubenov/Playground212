import { motion } from "framer-motion";
import React from "react";
import { SectionFieldStyle } from "./SectionFieldStyle";

type SectionFieldProps = {
  sectionName: string;
  selectedSection: string;
  setSelectedSection: (sectionName: string) => void;
  hoveredSection: string;
  setHoveredSection: (sectionName: string) => void;
};

const SectionField: React.FC<SectionFieldProps> = ({
  sectionName,
  selectedSection,
  setSelectedSection,
  hoveredSection,
  setHoveredSection,
}) => {
  return (
    <SectionFieldStyle>
      <div
        className={`${sectionName.toLowerCase()} section`}
        onMouseEnter={() => setHoveredSection(sectionName.toLowerCase())}
        onMouseLeave={() => setHoveredSection("none")}
        onClick={() => setSelectedSection(sectionName.toLowerCase())}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height:
              hoveredSection === sectionName.toLowerCase() ||
              selectedSection === sectionName.toLowerCase()
                ? "5px"
                : 0,
          }}
          exit={{ height: 0 }}
          className="selected"
        ></motion.div>
        <p>{sectionName}</p>
      </div>
    </SectionFieldStyle>
  );
};

export default SectionField;
