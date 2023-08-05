import React, { useRef, useState } from "react";
import { StyledContainer } from "./BigInputStyles";
import { motion } from "framer-motion";

type BigInputProps = {
  onClick: (about: string) => void;
};

const BigInput: React.FC<BigInputProps> = ({ onClick }) => {
  const [placeholderText, setPlaceholderText] = useState("(we are...)");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      if (inputRef.current.value !== "") {
        onClick(inputRef.current.value);
      } else {
        setPlaceholderText("(please, don't be shy)");
      }
    }
  };

  return (
    <StyledContainer>
      <motion.input
        type="text"
        whileFocus={{ boxShadow: "-2px 0 5px 1px #23f7dd", outline: "none" }}
        whileHover={{ boxShadow: "-2px 0 5px 1px #23f7dd", outline: "none" }}
        placeholder={placeholderText}
        ref={inputRef}
      />
      <motion.div
        whileHover={{
          backgroundColor: "#23f7dd",
          color: "#282936",
          boxShadow: "2px 0 5px 1px #23f7dd",
        }}
        className="text-container"
      >
        <p onClick={handleClick}>Next</p>
      </motion.div>
    </StyledContainer>
  );
};

export default BigInput;
