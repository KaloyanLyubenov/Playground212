import React from "react";
import { StyledContainer } from "./StepOneStyles";
import Button from "../../smallComponents/button/Button";

type StepOneProps = {
  setStep: (step: string) => void;
};

const StepOneIntro: React.FC<StepOneProps> = ({ setStep }) => {
  return (
    <StyledContainer>
      <h1>Let's start our creative journey</h1>
      <p>"(It won't hurt at all)"</p>
      <Button text={"Start"} onClick={() => setStep("about")} />
    </StyledContainer>
  );
};

export default StepOneIntro;
