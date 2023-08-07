import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import PopUpAnimation from "../../../animations/portfolio/PopUpAnimation";

interface OptionListProps {
  items: string[];
  onChoice: (choice: string) => void;
}

const OptionList: React.FC<OptionListProps> = ({ items, onChoice }) => {
  return (
    <>
      <AnimatePresence>
        {items.length >= 0 ? (
          <div className="dropdown-menu">
            {items.map((item, index) => {
              return (
                <motion.div
                  onClick={() => onChoice(item)}
                  style={{ cursor: "pointer" }}
                  className="option"
                  key={index}
                  initial="start"
                  animate="end"
                  exit="exit"
                  variants={PopUpAnimation(
                    (items.length - index) * 40,
                    0,
                    0.5,
                    0.005 + index * 0.01
                  )}
                >
                  <p className="filter-option">{item}</p>
                </motion.div>
              );
            })}
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default OptionList;
