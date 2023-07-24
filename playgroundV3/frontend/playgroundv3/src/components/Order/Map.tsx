import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import axios, { all } from "axios";
import Location from "./Location";
import { SelectChangeEvent } from "@mui/material";
import OrderDetails from "./OrderDetails";

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

interface UserOrderInformation {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  mediaType: string;
  formatType: string;
}

function Map() {
  // INIT MAP
  const GREEN_MARKER_ICON = `${process.env.PUBLIC_URL}/Map_pin_icon_green.svg`;
  const BLACK_MARKER_ICON = `${process.env.PUBLIC_URL}/location-dot.svg`;
  const mapRef = useRef<Map>();
  const [orderId, setOrderId] = useState(0);
  const [successVisibility, setSuccessVisibility] = useState(false);
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

  // Gather locations, mediaTyppes, formatTypes

  const [allLocations, setAllLocations] = useState<Location[]>([]);
  const [selectedLocasions, setSelectedLocasions] = useState<Location[]>([]);
  const [unselectedLocations, setUnselectedLocations] = useState<Location[]>(
    []
  );
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);
  const [formatTypes, setFormatTypes] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setMediaTypes(response.data.mediaTypes);
        setFormatTypes(response.data.formatTypes);
        setAllLocations(response.data.locations);
        console.log("Locations collected");
      })
      .catch((error) => {
        console.log("Couldn't get locations!");
      });
  }, []);

  // Logic

  const [format, setFormat] = useState<string>();
  const [mediaType, setMediaType] = useState<string>();

  // Filter locations
  useEffect(() => {
    const filteredLocations: Location[] = [];
    const other: Location[] = [];

    allLocations.map((location) => {
      if (
        (!mediaType || location.mediaType === mediaType) &&
        (!format || location.formatType === format)
      ) {
        filteredLocations.push(location);
      }
    });

    if (filteredLocations.length != 0) {
      setSelectedLocasions(filteredLocations);
    } else {
      console.log("No suitable locations");
    }
    if (other.length != 0) {
      setUnselectedLocations(other);
    }
  }, [format, mediaType]);

  // Remove location from selected list
  const removeLocation = (id: number) => {
    const newLocationList: Location[] = [];

    selectedLocasions.map((location) => {
      if (location.id != id) {
        newLocationList.push(location);
      } else {
        unselectedLocations.push(location);
      }
    });

    setSelectedLocasions(newLocationList);
  };

  // Add location to selected list
  const pickLocation = (id: number) => {
    console.log("id of location is: " + id);
    const newLocationList: Location[] = [];

    unselectedLocations.map((location) => {
      if (location.id !== id) {
        console.log(
          "adding location with id: " +
            location.id +
            " because it's different from: " +
            id
        );
        newLocationList.push(location);
      } else {
        console.log(
          "adding location with id " + location.id + "to the selected list"
        );
        selectedLocasions.push(location);
      }
    });

    setUnselectedLocations(newLocationList);
  };

  const handleOrderSubmit = (orderDetails: UserOrderInformation) => {
    console.log(orderDetails);

    if (orderId === 0) {
      axios
        .post(
          "http://localhost:8080/orders",
          {
            firstName: orderDetails.firstName,
            lastName: orderDetails.lastName,
            email: orderDetails.email,
            phoneNumber: orderDetails.phoneNumber,
            mediaType: mediaType,
            formatType: format,
            locationIDs: selectedLocasions.map(
              (location: Location) => location.id
            ),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          setOrderId(response.data);
          setSuccessVisibility(true);
        })
        .catch((error) => {
          console.log("Couldn't submit order!");
        });
    } else {
      axios
        .patch(
          "http://localhost:8080/orders",
          {
            id: orderId,
            firstName: orderDetails.firstName,
            lastName: orderDetails.lastName,
            email: orderDetails.email,
            phoneNumber: orderDetails.phoneNumber,
            mediaType: mediaType,
            formatType: format,
            locationIDs: selectedLocasions.map(
              (location: Location) => location.id
            ),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          setSuccessVisibility(true);
        })
        .catch((error) => {
          console.log("Couldn't edit order!");
        });
    }
  };

  return (
    <>
      <div
        className={`successfull-submit-overlay${
          successVisibility ? "visible" : ""
        }`}
      >
        <div className="message-box">
          <button
            onClick={() => {
              window.location.assign("/");
            }}
          >
            Back Home
          </button>
          <button onClick={() => setSuccessVisibility(false)}>Edit</button>
        </div>
      </div>
      <div className="order-container">
        <div className="order-locations-container">
          <h1
            className={`${
              selectedLocasions.length != 0 || unselectedLocations.length != 0
                ? "invisible"
                : ""
            }`}
          >
            Locations
          </h1>
          {selectedLocasions.length == 0 &&
            unselectedLocations.length == 0 &&
            allLocations.map((location, index) => {
              return (
                <div
                  className="location-container"
                  key={`all-location ${index}`}
                >
                  <Location
                    title={location.title}
                    description={location.description}
                    thumbnailUrl={location.thumbnailUrl}
                  />
                </div>
              );
            })}
          <h1 className={`${selectedLocasions.length != 0 ? "" : "invisible"}`}>
            Selected Locations
          </h1>
          {selectedLocasions &&
            selectedLocasions.map((location, index) => {
              return (
                <div
                  className="selected location-container"
                  key={`selected-location ${index}`}
                >
                  <div className="location-options">
                    <div className="option">
                      <p>Info</p>
                    </div>
                    <div
                      className="option"
                      onClick={() => removeLocation(location.id)}
                    >
                      <p>Remove</p>
                    </div>
                  </div>
                  <Location
                    title={location.title}
                    description={location.description}
                    thumbnailUrl={location.thumbnailUrl}
                  />
                </div>
              );
            })}
          <h1
            className={`${unselectedLocations.length != 0 ? "" : "invisible"}`}
          >
            Unselected Locations
          </h1>
          {unselectedLocations &&
            unselectedLocations.map((location, index) => {
              return (
                <div
                  className="unselected location-container"
                  key={`unselected-location ${index}`}
                >
                  <div className="location-options">
                    <div className="option">
                      <p>Info</p>
                    </div>
                    <div
                      className="option"
                      onClick={() => pickLocation(location.id)}
                    >
                      <p>Add</p>
                    </div>
                  </div>
                  <Location
                    title={location.title}
                    description={location.description}
                    thumbnailUrl={location.thumbnailUrl}
                  />
                </div>
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
            {selectedLocasions.length == 0 &&
              unselectedLocations.length == 0 &&
              allLocations.map((location, index) => {
                return (
                  <div key={`all-marker ${index}`}>
                    <Marker
                      position={{ lat: location.lat, lng: location.lng }}
                      icon={{
                        url: BLACK_MARKER_ICON,
                        scaledSize: new window.google.maps.Size(30, 40),
                      }}
                    />
                  </div>
                );
              })}
            {selectedLocasions.length != 0 &&
              selectedLocasions.map((location, index) => {
                return (
                  <div key={`selected-marker ${index}`}>
                    <Marker
                      position={{ lat: location.lat, lng: location.lng }}
                      icon={{
                        url: GREEN_MARKER_ICON,
                        scaledSize: new window.google.maps.Size(30, 40),
                      }}
                    />
                  </div>
                );
              })}
            {unselectedLocations.length != 0 &&
              unselectedLocations.map((location, index) => {
                return (
                  <div key={`unselected-marker ${index}`}>
                    <Marker
                      position={{ lat: location.lat, lng: location.lng }}
                    />
                  </div>
                );
              })}
          </GoogleMap>
        </div>
        <div className="order-details">
          <OrderDetails
            mediaTypes={mediaTypes}
            formatTypes={formatTypes}
            formatUpdate={setFormat}
            mediaTypeUpdate={setMediaType}
            orderSubmit={handleOrderSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default Map;
