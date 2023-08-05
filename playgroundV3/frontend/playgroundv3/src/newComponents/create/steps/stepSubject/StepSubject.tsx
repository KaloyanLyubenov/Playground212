import React from "react";
import { StyledContainer } from "../stepThree/StepThreeStyles";
import Button from "../../smallComponents/button/Button";

type StepFourProps = {
  submit: (subject: string) => void;
};

const StepSubject: React.FC<StepFourProps> = ({ submit }) => {
  const handleSubjectChoice = (subject: string) => {
    submit(subject);
  };

  return (
    <StyledContainer>
      <h1>What will be our subject</h1>
      <div className="buttons">
        <Button
          text={"me"}
          onClick={() => handleSubjectChoice("personal")}
        ></Button>
        <Button
          text={"my car"}
          onClick={() => handleSubjectChoice("automotive")}
        ></Button>
      </div>
    </StyledContainer>
  );
};

export default StepSubject;
