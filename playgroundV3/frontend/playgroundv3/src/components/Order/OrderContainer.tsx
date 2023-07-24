import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "../../styles/order.css";

interface OrderProps {
  orderId: number;
}

const OrderContainer: React.FC<OrderProps> = (givenOrderId) => {
  const [orderId, setOrderId] = useState<number>(givenOrderId.orderId);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map givenOrderId={orderId} />;
};

export default OrderContainer;
