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
import { PaymentStyle } from "./PaymentStyle";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_API_KEY as string
);

type PaymentProps = {
  price: number;
  orderID: number;
};

const Payment: React.FC<PaymentProps> = ({ price, orderID }) => {
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/create-payment-intent",
        {
          orderId: orderID,
          userEmail: localStorage.getItem("email"),
          amount: price,
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
      <PaymentStyle>
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm orderID={orderID} />
          </Elements>
        )}
      </PaymentStyle>
    </>
  );
};

export default Payment;
