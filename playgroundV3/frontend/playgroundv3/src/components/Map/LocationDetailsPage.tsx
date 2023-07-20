import { double } from "aws-sdk/clients/lightsail";
import { format } from "path";
import React, { FormEvent, useEffect, useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;
type LocationDetails = {
  title: string;
  position: LatLngLiteral;
  description: string;
  thumbnailUrl: string;
  mediaType: string;
  formatType: string;
};

interface LocDetsProps {
  onDetailsChange: (index: number, updatedLocation: LocationDetails) => void;
  index: number;
  location: LocationDetails;
}

const LocationDetailsPage: React.FC<LocDetsProps> = ({
  index,
  onDetailsChange,
  location,
}) => {
  const [title, setTitle] = useState<string>(location.title);
  const [description, setDescription] = useState<string>(location.description);
  const [mediaType, setMediaType] = useState<string>(location.mediaType);
  const [formatType, setFormatType] = useState<string>(location.formatType);

  const handleSubmit = () => {
    const updatedLocation = {
      title: title,
      position: location.position,
      description: description,
      thumbnailUrl: location.thumbnailUrl,
      mediaType: mediaType,
      formatType: formatType,
    };

    onDetailsChange(index, updatedLocation);
  };

  return (
    <div>
      <input
        placeholder="Set title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="Set Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <select
        typeof="text"
        id="media"
        className="media"
        value={mediaType}
        onChange={(e) => setMediaType(e.target.value)}
      >
        <option>Person</option>
        <option>Automotive</option>
        <option>Event</option>
      </select>
      <select
        typeof="text"
        id="format"
        value={formatType}
        className="format"
        onChange={(e) => setFormatType(e.target.value)}
      >
        <option>Photoshoot</option>
        <option>Videoshoot</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LocationDetailsPage;
