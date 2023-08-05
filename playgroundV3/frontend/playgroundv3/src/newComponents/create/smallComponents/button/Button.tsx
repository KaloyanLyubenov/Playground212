import React from "react";
import { ButtonStyledContainer } from "./ButtonStyles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonStyledContainer>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{text}</span>
      </button>
    </ButtonStyledContainer>
  );
};

export default Button;
