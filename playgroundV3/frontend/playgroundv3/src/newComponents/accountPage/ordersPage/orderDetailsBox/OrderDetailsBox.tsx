import { motion } from "framer-motion";
import React, { useState } from "react";
import Map from "../map/Map";

type LatLngLiteral = google.maps.LatLngLiteral;

type LocationInfo = {
  title: string;
  lat: number;
  lng: number;
};

type OrderDetailsPageProps = {
  locations: LocationInfo[];
};

const OrderDetailsBox: React.FC<OrderDetailsPageProps> = ({ locations }) => {
  const [focusMarkerCoords, setFocusMarkerCoords] = useState<LatLngLiteral>({
    lat: locations[0].lat,
    lng: locations[0].lng,
  });

  return (
    <motion.div
      className="details-box order"
      initial={{ maxHeight: 0, opacity: 0 }}
      animate={{
        maxHeight: 300,
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      }}
      exit={{ maxHeight: 0, opacity: 0 }}
    >
      <h1>Order details</h1>
      <div className="order-details">
        <div className="locations">
          {locations.map((location: LocationInfo) => (
            <motion.div
              key={location.lat + "." + location.lng + "." + location.title}
              whileHover={{ x: 2, y: -2 }}
              className="location-preview"
              onClick={() =>
                setFocusMarkerCoords({ lat: location.lat, lng: location.lng })
              }
            >
              <p>{location.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="map">
          <Map markerCoords={focusMarkerCoords} />
        </div>
      </div>
    </motion.div>
  );
};

export default OrderDetailsBox;
