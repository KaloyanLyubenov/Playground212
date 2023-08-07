import React, { useEffect } from "react";
import { SuccessStyle } from "./PaymentSuccessStyling";
import Button from "./create/smallComponents/button/Button";

import { useParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const { orderID } = useParams();

  useEffect(() => {
    console.log(orderID);
    axios
      .patch(`http://localhost:8080/orders/pricing/${orderID}`, 0, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Price change succesfully");
      })
      .catch((error) => {
        console.log("Couldn't change price!");
      });
  }, []);

  const relocate = () => {
    window.location.assign("/");
  };
  return (
    <SuccessStyle>
      <h1>Your Payment was successfull!</h1>
      <h1>Thank you!</h1>
      <Button
        text={"To main page"}
        onClick={() => {
          relocate();
        }}
      />
    </SuccessStyle>
  );
}

export default PaymentSuccess;
