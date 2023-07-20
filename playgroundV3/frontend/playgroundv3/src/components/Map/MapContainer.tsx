import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

function MapTry() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>...Loading</div>;
  return <Map />;
}

export default MapTry;
