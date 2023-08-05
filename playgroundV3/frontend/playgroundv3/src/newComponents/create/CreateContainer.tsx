import React, { useEffect, useState } from "react";
import { StyledContainer } from "./CreateContainerStyles";
import StepOneIntro from "./steps/stepOne/StepOneIntro";
import StepTwo from "./steps/stepTwo/StepTwoWho";
import StepThree from "./steps/stepThree/StepThreeWhat";
import StepLocations from "./steps/stepLocations/StepLocations";
import StepSubject from "./steps/stepSubject/StepSubject";
import SuccessPage from "./steps/success/SuccessPage";
import StepEventLocations from "./steps/stepLocations/StepEventLocations";

function CreateContainer() {
  const [currentStep, setCurrentStep] = useState("start");
  const [aboutClient, setAboutClient] = useState("");
  const [service, setService] = useState("");
  const [stepText, setStepText] = useState("Step 1");
  const [subject, setSubject] = useState("");
  const [orderSuccess, setOrderSuccess] = useState("");

  const goToStep = (step: string) => {
    setCurrentStep(step);
    setStepText(`Step 2`);
  };

  const aboutClientDetails = (step: string, about: string) => {
    setCurrentStep(step);
    setAboutClient(about);
    setStepText(`Step 3`);
  };

  const handleServiceChoice = (step: string, service: string) => {
    setCurrentStep(step);
    setService(service);
    if (service === "event") {
      setSubject(service);
    }
    setStepText("Step 4");
  };

  const handleSubjectChoice = (subject: string) => {
    setSubject(subject);
    setCurrentStep("location");
    setStepText("Step 5");
  };

  const handleSuccesStatus = (status: boolean) => {
    if (status) {
      setCurrentStep("success page");
      setStepText("Step 6");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <StyledContainer>
      {/* <h1>Mitko beshe tuk</h1> */}
      <div className="container">
        <div className="content">
          <div
            className="header"
            style={{ display: currentStep === "start" ? "block" : "none" }}
          ></div>
          <div className="main">
            {currentStep === "start" ? (
              <StepOneIntro setStep={goToStep} />
            ) : null}
            {currentStep === "about" ? (
              <StepTwo submit={aboutClientDetails} />
            ) : null}
            {currentStep === "service" ? (
              <StepThree submit={handleServiceChoice} />
            ) : null}
            {currentStep === "subject" ? (
              <StepSubject submit={handleSubjectChoice} />
            ) : null}
            {currentStep === "location" &&
            (service === "photoshoot" || service === "videoshoot") ? (
              <StepLocations
                details={{ subject: subject, service: service }}
                setSuccessStatus={(status: boolean) =>
                  handleSuccesStatus(status)
                }
              />
            ) : null}
            {currentStep === "location" && service === "event" ? (
              <StepEventLocations
                details={{ subject: subject, service: service }}
                setSuccessStatus={(status: boolean) =>
                  handleSuccesStatus(status)
                }
              />
            ) : null}
            {currentStep === "success page" ? <SuccessPage /> : null}
          </div>
          <div className="footer">
            <p>{stepText}</p>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default CreateContainer;
