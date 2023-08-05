import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyledContainer } from "./StepLocationsStyles";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import LocationView from "./locationSideview/LocationView";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import InfoBox from "./infoBox/InfoBox";
import { stringList } from "aws-sdk/clients/datapipeline";

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

type Location = {
  id: number;
  title: string;
  description: string;
  timeOfDay: string;
  lat: number;
  lng: number;
};

type OrderDetails = {
  format: string;
  type: string;
  locationIDs: number[];
};

const GREEN_MARKER_ICON = `${process.env.PUBLIC_URL}/Map_pin_icon_green.svg`;

const StepLocations: React.FC<LocationStepProps> = ({
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
  const [visibleLocation, setVisibleLocation] = useState<Location | null>(null);
  const closeIconRef = useRef<typeof CancelIcon | null>(null);

  const handleInfo = (location: Location, index: number) => {
    let newState: boolean;
    if (location.title === "") {
      newState = false;
    } else {
      newState = true;
    }

    if (newState !== isInfoVisible || location !== visibleLocation) {
      setIsInfoVisible(newState);
      setVisibleLocation(location);
      mapRef.current?.panTo({
        lat: locations[index].lat,
        lng: locations[index].lng,
      });
    }
  };

  const handleUnselectedInfo = (location: Location, index: number) => {
    let newState: boolean;
    if (location.title === "") {
      newState = false;
    } else {
      newState = true;
    }

    if (newState !== isInfoVisible || location !== visibleLocation) {
      setIsInfoVisible(newState);
      setVisibleLocation(location);
      mapRef.current?.panTo({
        lat: unselectedLocations[index].lat,
        lng: unselectedLocations[index].lng,
      });
    }
  };

  // Locations receive
  const [locations, setLocations] = useState<Location[]>([]);
  const [unselectedLocations, setUnselectedLocations] = useState<Location[]>(
    []
  );

  useEffect(() => {
    if (details.service !== "event") {
      axios
        .get(
          `http://localhost:8080/locations?format=${details.service}&type=${details.subject}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          setLocations(response.data);
        })
        .catch((error) => {
          console.log("Couldn't get locations!");
        });
    }
  }, []);

  const updateIndex = (title: string, index: number) => {
    mapRef.current?.panTo({
      lat: locations[index].lat,
      lng: locations[index].lng,
    });
  };

  const removeLocation = (index: number) => {
    let updatedLocations = locations.filter((location, i) => i !== index);
    setLocations(updatedLocations);
    let updatedUnselectedList = unselectedLocations;
    updatedUnselectedList.push(locations[index]);
    setUnselectedLocations(updatedUnselectedList);
  };

  const addLocation = (index: number) => {
    let updatedList = locations;
    updatedList.push(unselectedLocations[index]);
    setLocations(updatedList);
    let updatedUnselectedLocations = unselectedLocations.filter(
      (location, i) => i !== index
    );
    setUnselectedLocations(updatedUnselectedLocations);
  };

  const handleSubmit = () => {
    let locationIDs: number[] = [];
    locations.map((location) => locationIDs.push(location.id));

    let sendData = {
      locationIDs: locationIDs,
      format: details.service,
      type: details.subject,
    };

    console.log(sendData);

    axios
      .post(`http://localhost:8080/orders`, sendData, {
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
                onInfo={() => handleInfo(location, index)}
                onAddRemove={() => removeLocation(index)}
                key={index}
              ></LocationView>
            ))}
            {unselectedLocations.map((location, index) => (
              <LocationView
                title={location.title}
                isSelected={false}
                onInfo={() => handleUnselectedInfo(location, index)}
                onAddRemove={() => addLocation(index)}
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
            >
              {locations.map((location, index) => {
                return (
                  <Marker
                    position={{ lat: location.lat, lng: location.lng }}
                    key={index}
                    onClick={() => updateIndex(location.title, index)}
                    icon={{
                      url: GREEN_MARKER_ICON,
                      scaledSize: new window.google.maps.Size(30, 40),
                    }}
                  />
                );
              })}
              {unselectedLocations.map((location, index) => {
                return (
                  <Marker
                    position={{ lat: location.lat, lng: location.lng }}
                    key={index}
                    onClick={() => updateIndex(location.title, index)}
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
                  <InfoBox
                    location={visibleLocation}
                    format={details.service}
                    onClose={() => setIsInfoVisible(false)}
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

export default StepLocations;
