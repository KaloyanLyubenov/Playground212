import React from "react";
import { StyledGallery } from "./AccountGalleryStyles";

type Picture = {
  name: string;
};

type Album = {
  albumName: string;
  thumbnailName: string;
  timeOfDay: string;
  mediaType: string;
  pictures: Picture[];
};

type AccountGalleryProps = {
  albums: Album[];
};

const AccountGallery: React.FC<AccountGalleryProps> = ({ albums }) => {
  return (
    <StyledGallery>
      {albums.map((labum) => (
        <div className="image-box">
          <p>Album name</p>
        </div>
      ))}
      <div className="image-box">
        <p>Album name</p>
      </div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
      <div className="image-box">image</div>
    </StyledGallery>
  );
};

export default AccountGallery;
