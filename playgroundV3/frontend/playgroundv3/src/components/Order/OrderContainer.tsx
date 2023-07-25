import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import Map from "./Map";
import "../../styles/order.css";

interface OrderProps {
  orderId: number;
}

const OrderContainer: React.FC<OrderProps> = () => {
  const { orderId } = useParams();
  console.log(orderId);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      {orderId && <Map givenOrderId={parseInt(orderId)} />}
      {!orderId && <Map givenOrderId={0} />}
    </>
  );
};

export default OrderContainer;
