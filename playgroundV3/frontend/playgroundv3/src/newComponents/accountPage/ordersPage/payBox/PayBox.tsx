import React, { useRef, useState } from "react";
import { StylizedPayBox } from "./PayBoxStyle";
import axios from "axios";
import Payment from "./Payment";

type PayProps = {
  currentPrice: number;
  orderID: number;
};

const PayBox: React.FC<PayProps> = ({ currentPrice, orderID }) => {
  const loggedUserEmailRef = useRef(localStorage.getItem("email"));
  const [price, setPrice] = useState<number>(0);

  const handlePriceChange = () => {
    console.log("here");
    if (price !== 0) {
      axios
        .patch(`http://localhost:8080/orders/pricing/${orderID}`, price, {
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
    }
  };

  return (
    <StylizedPayBox>
      {loggedUserEmailRef.current === "nick@mail.com" ? (
        <>
          <h1>Current price is {currentPrice}</h1>
          <div className="input-field">
            <input
              type="number"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <div className="submit-button" onClick={handlePriceChange}>
              <p>Set Price</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Payment price={currentPrice} orderID={orderID} />
        </>
      )}
    </StylizedPayBox>
  );
};

export default PayBox;
