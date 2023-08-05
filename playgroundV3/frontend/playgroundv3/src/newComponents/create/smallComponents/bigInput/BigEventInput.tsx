import React, { useRef, useState } from "react";
import { StyledContainer } from "./BigEventInputStyle";
import { motion } from "framer-motion";

type BigInputProps = {
  text: string;
  onChange: (value: string) => void;
};

const BigInput: React.FC<BigInputProps> = ({ text, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {};

  return (
    <StyledContainer>
      <motion.input
        type="text"
        whileFocus={{ boxShadow: "-2px 0 5px 1px #23f7dd", outline: "none" }}
        whileHover={{ boxShadow: "-2px 0 5px 1px #23f7dd", outline: "none" }}
        placeholder={text}
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledContainer>
  );
};

export default BigInput;
