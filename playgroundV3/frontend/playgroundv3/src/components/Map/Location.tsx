import { integer } from "aws-sdk/clients/cloudfront";
import React from "react";

interface LocationProps {
  key: integer;
  title: string;
  description: string;
  thumbnailUrl: string;
}

const Location: React.FC<LocationProps> = ({
  key,
  title,
  description,
  thumbnailUrl,
}) => {
  return (
    <div className="location" key={key}>
      <img className="thumbnail" src={thumbnailUrl} alt="" />
      <div className="location-info">
        <div className="location-title">
          <p style={{ fontSize: 14, margin: 1, height: 17 }}>{title}</p>
        </div>
        <div className="location-details">
          <p style={{ fontSize: 14, margin: 1 }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
