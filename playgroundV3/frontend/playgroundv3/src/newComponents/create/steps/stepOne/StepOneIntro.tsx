import React, { useEffect } from "react";
import { StyledContainer } from "./StepOneStyles";
import Button from "../../smallComponents/button/Button";
import { useAuthContext } from "../../../AuthContext";

type StepOneProps = {
  setStep: (step: string) => void;
};

const StepOneIntro: React.FC<StepOneProps> = ({ setStep }) => {
  const { handlePageChange } = useAuthContext();

  const handleNecessaryLogin = () => {
    handlePageChange("login");
    setStep("about");
  };

  return (
    <StyledContainer>
      <h1>Let's start our creative journey</h1>
      <p>"(It won't hurt at all)"</p>
      <Button
        text={"Start"}
        onClick={() =>
          !localStorage.getItem("token")
            ? handleNecessaryLogin()
            : setStep("about")
        }
      />
    </StyledContainer>
  );
};

export default StepOneIntro;
