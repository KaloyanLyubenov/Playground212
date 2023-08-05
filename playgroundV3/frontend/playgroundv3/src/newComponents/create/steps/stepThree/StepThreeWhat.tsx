import React from "react";
import { StyledContainer } from "./StepThreeStyles";
import Button from "../../smallComponents/button/Button";
import BigInput from "../../smallComponents/bigInput/BigInput";

type StepTwoProps = {
  submit: (step: string, about: string) => void;
};

const StepTwo: React.FC<StepTwoProps> = ({ submit }) => {
  const handleServiceChoice = (service: string) => {
    if (service === "photoshoot") {
      submit("subject", service);
    }
    if (service === "videoshoot") {
      submit("subject", service);
    }
    if (service === "event") {
      submit("location", service);
    }
    if (service === "video edit") {
      submit("end", service);
    }
  };

  return (
    <StyledContainer>
      <h1>What kind of service do you require</h1>
      <p>"(I need...)"</p>
      <div className="buttons">
        <Button
          text={"a photoshoot"}
          onClick={() => handleServiceChoice("photoshoot")}
        ></Button>
        <Button
          text={"a videoshoot"}
          onClick={() => handleServiceChoice("videoshoot")}
        ></Button>
        <Button
          text={"an event covered"}
          onClick={() => handleServiceChoice("event")}
        ></Button>
        <Button
          text={"a video edited"}
          onClick={() => handleServiceChoice("video edit")}
        ></Button>
      </div>
    </StyledContainer>
  );
};

export default StepTwo;
