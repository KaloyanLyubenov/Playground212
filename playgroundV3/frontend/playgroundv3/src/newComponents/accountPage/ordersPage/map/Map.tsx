import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Map = google.maps.Map;
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

type MapProps = {
  markerCoords: LatLngLiteral;
};

const Map: React.FC<MapProps> = ({ markerCoords }) => {
  const mapRef = useRef<Map>();
  const [markerPosition, setMarkerPosition] = useState(markerCoords);

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

  useEffect(() => {
    mapRef.current?.panTo(markerCoords);
  }, [markerCoords]);

  const onLoad = useCallback((map: Map) => {
    mapRef.current = map;
    return;
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName={`map-self`}
      options={options}
      onLoad={onLoad}
    >
      <Marker position={markerCoords} />
    </GoogleMap>
  );
};

export default Map;
