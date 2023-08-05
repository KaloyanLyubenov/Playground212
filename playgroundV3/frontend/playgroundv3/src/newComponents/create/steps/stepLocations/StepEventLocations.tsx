import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyledContainer } from "./StepLocationsStyles";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import LocationView from "./locationSideview/LocationView";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import EventInfoBox from "./infoBox/EventInfoBox";
import { title } from "process";

type Map = google.maps.Map;
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

type LocationStepProps = {
  details: {
    service: string;
    subject: string;
  };
  setSuccessStatus: (status: boolean) => void;
};

type LocationDetails = {
  title: string;
  position: LatLngLiteral;
  description: string;
  type: string;
  format: string;
  timeOfDay: string;
};

type LocationDetailsForSending = {
  title: string;
  lat: number;
  lng: number;
  description: string;
  type: string;
  format: string;
  timeOfDay: string;
};

const GREEN_MARKER_ICON = `${process.env.PUBLIC_URL}/Map_pin_icon_green.svg`;

const StepEventLocations: React.FC<LocationStepProps> = ({
  details,
  setSuccessStatus,
}) => {
  // Map Loading Props
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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  // Location dealing
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [visibleLocation, setVisibleLocation] =
    useState<LocationDetails | null>(null);
  const [visibleLocationIndex, setVisibleLocationIndex] = useState<number>(-1);

  const handleInfo = (index: number) => {
    let newState: boolean;
    if (locations[index].title === "") {
      newState = false;
    } else {
      newState = true;
    }

    if (newState !== isInfoVisible || locations[index] !== visibleLocation) {
      setIsInfoVisible(newState);
      setVisibleLocation(locations[index]);
      setVisibleLocationIndex(index);
      mapRef.current?.panTo({
        lat: locations[index].position.lat,
        lng: locations[index].position.lng,
      });
    }
  };

  // Locations receive
  const [locations, setLocations] = useState<LocationDetails[]>([]);

  const updateIndex = (title: string, index: number) => {
    mapRef.current?.panTo({
      lat: locations[index].position.lat,
      lng: locations[index].position.lng,
    });
  };

  const removeLocation = (index: number) => {
    let updatedLocations = locations.filter((location, i) => i !== index);
    setLocations(updatedLocations);
  };

  const addLocation = (position: LatLngLiteral) => {
    const newLocation = {
      title: "{set title}",
      position: position,
      description: "{set description}",
      type: "personal",
      format: "photoshoot",
      timeOfDay: "day",
    };
    setLocations((prevLocations) => [...prevLocations, newLocation]);
  };

  const handleMouseClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) addLocation({ lat: e.latLng?.lat(), lng: e.latLng?.lng() });
  };

  const handleSubmit = () => {
    let locationDetails: LocationDetailsForSending[] = [];
    locations.map((location) => {
      locationDetails.push({
        title: location.title,
        lat: location.position.lat,
        lng: location.position.lng,
        description: location.description,
        type: location.type,
        format: location.format,
        timeOfDay: location.timeOfDay,
      });
    });

    let sendData = {
      format: "event",
      type: "event",
      locations: locationDetails,
    };

    axios
      .post(`http://localhost:8080/orders/events`, sendData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setSuccessStatus(true);
      })
      .catch((error) => {
        setSuccessStatus(false);
      });
  };

  const handleLocationDetailsChange = (title: string, description: string) => {
    locations[visibleLocationIndex].title = title;
    locations[visibleLocationIndex].description = description;
    setVisibleLocation(null);
    setVisibleLocationIndex(-1);
    setIsInfoVisible(false);
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <StyledContainer>
      <h1>Choose Locations</h1>
      <div className="map-view">
        <div className="locations">
          <div className="locations-list">
            {locations.map((location, index) => (
              <LocationView
                title={location.title}
                isSelected={true}
                onInfo={() => handleInfo(index)}
                onAddRemove={() => removeLocation(index)}
                key={index}
              ></LocationView>
            ))}
          </div>
          <motion.div
            whileHover={{
              x: -5,
              y: -5,
              backgroundColor: "#23f7dd",
              color: "#21212a",
              borderColor: "#21212a",
            }}
            onClick={handleSubmit}
            className="submit-button"
          >
            <p>Submit</p>
          </motion.div>
        </div>
        <div className="map-container">
          <motion.div
            className="map"
            style={{ height: isInfoVisible ? "70%" : "100%" }}
          >
            <GoogleMap
              zoom={12}
              center={center}
              mapContainerClassName={`map-self${
                isInfoVisible ? " has-info" : ""
              }`}
              options={options}
              onLoad={onLoad}
              onClick={handleMouseClick}
            >
              {locations.map((location, index) => {
                return (
                  <Marker
                    position={{
                      lat: location.position.lat,
                      lng: location.position.lng,
                    }}
                    key={index}
                    onClick={() => updateIndex(location.title, index)}
                    icon={{
                      url: GREEN_MARKER_ICON,
                      scaledSize: new window.google.maps.Size(30, 40),
                    }}
                  />
                );
              })}
            </GoogleMap>
          </motion.div>

          {isInfoVisible && visibleLocation ? (
            <AnimatePresence>
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "30%" }}
                exit={{ height: "0%" }}
                className="location-details"
              >
                <AnimatePresence>
                  <EventInfoBox
                    location={visibleLocation}
                    format={details.service}
                    onClose={() => setIsInfoVisible(false)}
                    onClick={(title, description) =>
                      handleLocationDetailsChange(title, description)
                    }
                  />
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </div>
    </StyledContainer>
  );
};

export default StepEventLocations;
