import React from "react";
import { StyledContainer } from "./StepTwoStyles";
import Button from "../../smallComponents/button/Button";
import BigInput from "../../smallComponents/bigInput/BigInput";

type StepTwoProps = {
  submit: (step: string, about: string) => void;
};

const StepTwo: React.FC<StepTwoProps> = ({ submit }) => {
  const handleInputSubmit = (about: string) => {
    submit("service", about);
    console.log("submit handled in step two");
  };

  return (
    <StyledContainer>
      <h1>Tell us about yourself</h1>
      <p>"(don't be shy)"</p>
      <BigInput onClick={handleInputSubmit} />
    </StyledContainer>
  );
};

export default StepTwo;
