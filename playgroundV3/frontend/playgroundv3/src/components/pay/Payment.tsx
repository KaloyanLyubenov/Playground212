import React, { useEffect, useState } from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementStyle,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_API_KEY as string
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/create-payment-intent",
        {
          orderId: 2,
          userEmail: "dani@mail.com",
          amount: 10.99,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Successfully received client secret");
        console.log(response.data);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.log("Couldn't submit order!");
      });
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
