import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";

type Map = google.maps.Map;
type MapOptions = google.maps.MapOptions;
type LatLngLiteral = google.maps.LatLngLiteral;
type Location = {
  title: string;
  position: LatLngLiteral;
  lat: number;
  lng: number;
  thumbnailUrl: string;
  mediaType: string;
  formatType: string;
};

function Map() {
  // INIT MAP
  const mapRef = useRef<Map>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 42.6977, lng: 23.3219 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "58152e2cf2606357",
      disableDefaultUI: true,
      clickableIcons: false,
      minZoom: 3,
    }),
    []
  );
  const onLoad = useCallback((map: Map) => {
    mapRef.current = map;
    return;
  }, []);

  // FUNC
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/locations", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setLocations(response.data);
        console.log("Locations collected");
      })
      .catch((error) => {
        console.log("Couldn't get locations!");
      });
  }, []);

  return (
    <>
      <div className="order-container">
        <div className="order-locations">
          <h1>Locations</h1>
        </div>
        <div className="map-container">
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="map"
            options={options}
            onLoad={onLoad}
          ></GoogleMap>
        </div>
        <div className="order-details">
          <h1>Location Details</h1>
        </div>
      </div>
    </>
  );
}

export default Map;
