import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import Location from "./Location";
import { SelectChangeEvent } from "@mui/material";

type Map = google.maps.Map;
type MapOptions = google.maps.MapOptions;
type LatLngLiteral = google.maps.LatLngLiteral;

type Location = {
  id: number;
  title: string;
  position: LatLngLiteral;
  lat: number;
  lng: number;
  description: string;
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

  // Collect locations

  const [allLocations, setAllLocations] = useState<Location[]>([]);
  const [suitableLocations, setSuitableLocations] = useState<Location[]>([]);
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);
  const [formatTypes, setFormatTypes] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/order", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setMediaTypes(response.data.mediaTypes);
        setFormatTypes(response.data.formatTypes);
        setAllLocations(response.data.locations);
        setSuitableLocations(response.data.locations);
        console.log(response.data.locations);
        console.log("Locations collected");
      })
      .catch((error) => {
        console.log("Couldn't get locations!");
      });
  }, []);

  // Logic

  const [format, setFormat] = useState<string>("PHOTOSHOOT");
  const [mediaType, setMediaType] = useState<string>("PERSON");

  useEffect(() => {
    const filteredLocations: Location[] = [];

    allLocations.map((location) => {
      if (location.formatType === format && location.mediaType === mediaType) {
        filteredLocations.push(location);
      }
    });

    setSuitableLocations(filteredLocations);
  }, [format, mediaType]);

  return (
    <>
      <div className="order-container">
        <div className="order-locations-container">
          <h1>Locations</h1>
          {suitableLocations &&
            suitableLocations.map((location) => {
              return (
                <Location
                  key={location.id}
                  title={location.title}
                  description={location.description}
                  thumbnailUrl={location.thumbnailUrl}
                />
              );
            })}
        </div>
        <div className="map-container">
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="map"
            options={options}
            onLoad={onLoad}
          >
            {suitableLocations &&
              suitableLocations.map((location) => {
                return (
                  <Marker
                    position={{ lat: location.lat, lng: location.lng }}
                    key={location.id}
                  />
                );
              })}
          </GoogleMap>
        </div>
        <div className="order-details">
          <h1>Order Details</h1>
          <div className="inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="Phone number" />
            <select
              name="format-type"
              id="format-type"
              onChange={(e) => setFormat(e.target.value)}
            >
              {formatTypes &&
                formatTypes.map((formatType) => {
                  return <option value={formatType}>{formatType}</option>;
                })}
            </select>
            <select
              name="media-type"
              id="media-type"
              onChange={(e) => setMediaType(e.target.value)}
            >
              {mediaTypes &&
                mediaTypes.map((mediaType) => {
                  return <option value={mediaType}>{mediaType}</option>;
                })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
