import React from "react";
import { SucccessPageStyle } from "./SuccessPageStyles";
import Button from "../../smallComponents/button/Button";

function SuccessPage() {
  const handleServiceChoice = (name: string) => {
    window.location.assign("/");
  };

  return (
    <SucccessPageStyle>
      <h1>Your order has been submitted</h1>
      <p>"(Thank you for your trust)"</p>
      <div className="buttons">
        <Button
          text={"Go to account"}
          onClick={() => handleServiceChoice("account")}
        ></Button>
        <Button
          text={"Main page"}
          onClick={() => handleServiceChoice("main")}
        ></Button>
      </div>
    </SucccessPageStyle>
  );
}

export default SuccessPage;
