import { integer } from "aws-sdk/clients/cloudfront";
import React from "react";

interface LocationProps {
  title: string;
  description: string;
  thumbnailUrl: string;
}

const Location: React.FC<LocationProps> = ({
  title,
  description,
  thumbnailUrl,
}) => {
  return (
    <div className="location">
      <img className="thumbnail" src={thumbnailUrl} alt="" />
      <div className="location-info">
        <div className="location-title">
          <p className="p">{title}</p>
        </div>
        <div className="location-details">
          <p className="p">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
