import { useState, useMemo, useCallback, useRef, FormEvent } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "../../styles/mapTry.css";
import Location from "./Location";
import LocationDetailsPage from "./LocationDetailsPage";
import axios from "axios";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type Map = google.maps.Map;
type LocationDetails = {
  title: string;
  position: LatLngLiteral;
  description: string;
  thumbnailUrl: string;
  mediaType: string;
  formatType: string;
};
type LocationToSend = {
  title: string;
  lat: number;
  lng: number;
  thumbnailUrl: string;
  mediaType: string;
  formatType: string;
};

function Map() {
  const mapRef = useRef<Map>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 42.6977, lng: 23.3219 }),
    []
  );
  const [locations, setLocations] = useState<LocationDetails[]>([]);
  const [indexToUpdate, setIndexToUpdate] = useState<number>(-1);

  const options = useMemo<MapOptions>(
    () => ({
      mapId: "58152e2cf2606357",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map: Map) => {
    mapRef.current = map;
    return;
  }, []);

  const updateLocationDetails = (
    index: number,
    updatedLocation: LocationDetails
  ) => {
    setLocations((prevLocations) => {
      const updatedLocations = [...prevLocations];
      updatedLocations[index] = updatedLocation;
      return updatedLocations;
    });
    setIndexToUpdate(-1);
  };

  const addLocation = (position: LatLngLiteral) => {
    const newLocation = {
      title: "{set title}",
      position: position,
      description: "{set description}",
      thumbnailUrl:
        "https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004",
      mediaType: "Person",
      formatType: "Photoshoot",
    };
    setLocations((prevLocations) => [...prevLocations, newLocation]);
  };

  const handleMouseClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) addLocation({ lat: e.latLng?.lat(), lng: e.latLng?.lng() });
  };

  const updateIndex = (index: number) => {
    setIndexToUpdate(index);
    mapRef.current?.panTo(locations[index].position);
  };

  const submitLocations = () => {
    const locationsToSubmit: LocationToSend[] = [];

    if (locations) {
      locations.map((location) => {
        if (
          location.title !== "{set title}" &&
          location.description !== "{set description}"
        ) {
          const newLocation = {
            title: location.title,
            lat: location.position.lat,
            lng: location.position.lng,
            description: location.description,
            thumbnailUrl: location.thumbnailUrl,
            mediaType: location.mediaType.toUpperCase(),
            formatType: location.formatType.toUpperCase(),
          };
          locationsToSubmit.push(newLocation);
        }
      });
    }

    if (locationsToSubmit.length != 0) {
      console.log(locationsToSubmit);

      axios
        .post("http://localhost:8080/locations", locationsToSubmit)
        .then((response) => {
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

  const clearLocations = () => {
    setLocations([]);
  };

  return (
    <div className="container">
      <div className="locations">
        <h1>Locations</h1>
        {locations.length != 0 && (
          <>
            <button onClick={submitLocations}>Submit locations</button>
            <button onClick={clearLocations}>Clear list</button>
          </>
        )}
        {locations &&
          locations.map((location, index) => (
            <>
              <div
                onClick={() => updateIndex(index)}
                key={index}
                className={`${
                  location.title === "{set title}" ||
                  location.description === "{set description}"
                    ? "unedited"
                    : "edited"
                }`}
              >
                <Location
                  key={index}
                  title={location.title}
                  description={location.description}
                  thumbnailUrl={location.thumbnailUrl}
                />
              </div>
            </>
          ))}
      </div>
      <div className="map">
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
          onClick={handleMouseClick}
        >
          {locations &&
            locations.map((location, index) => (
              <>
                <Marker
                  position={location.position}
                  key={index}
                  onClick={() => updateIndex(index)}
                />
              </>
            ))}
        </GoogleMap>
      </div>
      <div className="details">
        <h1>Location Details</h1>
        {indexToUpdate !== -1 && (
          <LocationDetailsPage
            index={indexToUpdate}
            onDetailsChange={updateLocationDetails}
            location={locations[indexToUpdate]}
            key={indexToUpdate}
          />
        )}
      </div>
    </div>
  );
}

export default Map;
