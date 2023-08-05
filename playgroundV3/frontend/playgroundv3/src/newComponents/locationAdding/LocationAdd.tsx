import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyledContainer } from "./LocationAddStyles";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import LocationView from "../create/steps/stepLocations/locationSideview/LocationView";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import OptionLIst from "../portfolio/photography/OptionLIst";
import OptionList from "../portfolio/photography/OptionLIst";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

type Map = google.maps.Map;
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

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

function LocationAdd() {
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
  const [titleVisibleLocation, setTitleVisibleLocation] = useState("");
  const [locations, setLocations] = useState<LocationDetails[]>([]);
  const [currentlyEditedLocatonIndex, setCurrentlyEditedLocatonIndex] =
    useState(-1);

  const [format, setFormat] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [description, setDescription] = useState("");

  const handleInfo = (index: number) => {
    if (!isInfoVisible) {
      setIsInfoVisible(true);
    }

    setCurrentlyEditedLocatonIndex(index);
    console.log(index);

    setFormat("");
    setType("");
    setTitle("");
    setTimeOfDay("");
    setDescription("");
    mapRef.current?.panTo(locations[index].position);
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

  const updateLocation = () => {
    let newLocations = locations;
    if (timeOfDay !== "") {
      newLocations[currentlyEditedLocatonIndex].timeOfDay = timeOfDay;
    }
    if (title !== "") {
      newLocations[currentlyEditedLocatonIndex].title = title;
    }
    if (description !== "") {
      newLocations[currentlyEditedLocatonIndex].description = description;
    }
    if (format !== "") {
      newLocations[currentlyEditedLocatonIndex].format = format;
    }
    if (type !== "") {
      newLocations[currentlyEditedLocatonIndex].type = type;
    }

    console.log(newLocations[currentlyEditedLocatonIndex]);

    setFormat("");
    setType("");
    setTitle("");
    setTimeOfDay("");
    setDescription("");
    setIsInfoVisible(false);

    setLocations(newLocations);
  };

  const updateIndex = (title: string, index: number) => {
    setTitleVisibleLocation(title);
    mapRef.current?.panTo(locations[index].position);
  };

  const submitLocations = () => {
    let locationsToSubmit: LocationDetailsForSending[] = [];

    locations.map((location) => {
      if (
        location.title !== "{set title}" &&
        location.description !== "{set description}"
      ) {
        let locationToSend: LocationDetailsForSending = {
          title: location.title,
          lat: location.position.lat,
          lng: location.position.lng,
          description: location.description,
          type: location.type,
          format: location.format,
          timeOfDay: location.timeOfDay,
        };
        locationsToSubmit.push(locationToSend);
      }
    });

    console.log(locationsToSubmit);

    if (locationsToSubmit.length != 0) {
      console.log(locationsToSubmit);

      axios
        .post("http://localhost:8080/locations", locationsToSubmit, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        })
        .then(() => {
          console.log("locations submitted");
          setLocations([]);
        })
        .catch((error) => {
          console.error("Error submitting locations:", error);
        });
    } else {
      console.log("There are no edited locations to submit");
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <StyledContainer>
      <h1>Choose a location</h1>
      <div className="box">
        <div className="map-view">
          <div className="locations-list">
            <div className="locations">
              {locations.map((location, index) => {
                return (
                  <LocationView
                    key={index}
                    title={location.title}
                    isSelected={true}
                    onInfo={() => handleInfo(index)}
                  ></LocationView>
                );
              })}
            </div>
            <div className="submit-button" onClick={submitLocations}>
              <p>SUBMIT</p>
            </div>
          </div>
          <div className="map-container">
            <motion.div
              className="map"
              style={{ height: isInfoVisible ? "80%" : "100%" }}
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
                {locations.map((location, index) => (
                  <>
                    <Marker
                      position={location.position}
                      key={index}
                      onClick={() => updateIndex(location.title, index)}
                    />
                  </>
                ))}
              </GoogleMap>
            </motion.div>
            <AnimatePresence>
              {isInfoVisible ? (
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "20%" }}
                  exit={{ height: "0%" }}
                  className="location-details"
                >
                  <div className="settings">
                    <div className="inputs">
                      <input
                        type="text"
                        placeholder={
                          locations[currentlyEditedLocatonIndex].title
                        }
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder={
                          locations[currentlyEditedLocatonIndex].description
                        }
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="selects">
                      <select
                        name="type"
                        defaultValue={
                          locations[currentlyEditedLocatonIndex].type
                        }
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="automotive">Automotive</option>
                        <option value="personal">Personal</option>
                      </select>
                      <select
                        name="format"
                        defaultValue={
                          locations[currentlyEditedLocatonIndex].format
                        }
                        onChange={(e) => setFormat(e.target.value)}
                      >
                        <option value="photography">Photography</option>
                        <option value="videography">Videography</option>
                      </select>
                      <select
                        name="time-of-day"
                        defaultValue={
                          locations[currentlyEditedLocatonIndex].timeOfDay
                        }
                        onChange={(e) => setTimeOfDay(e.target.value)}
                      >
                        <option value="day">Day</option>
                        <option value="night">Night</option>
                      </select>
                    </div>
                  </div>
                  <div className="apply-button" onClick={updateLocation}>
                    <p>Apply</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default LocationAdd;
