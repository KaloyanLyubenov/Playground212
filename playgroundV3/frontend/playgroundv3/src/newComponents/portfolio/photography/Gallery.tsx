import React from "react";
import { StyledGallery } from "./GalleryStyled";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

type Picture = {
  name: string;
};

type GalleryProps = {
  pictures: Picture[];
  onClose: (name: string) => void;
};

const Gallery: React.FC<GalleryProps> = ({ pictures, onClose }) => {
  return (
    <StyledGallery>
      <div onClick={() => onClose("")}>
        <ExitToAppIcon
          style={{
            position: "fixed",
            height: "100px",
            width: "100px",
            color: "white",
            cursor: "pointer",
            zIndex: "150",
            transform: "rotate(180deg)",
          }}
        />
      </div>
      <div className="gallery">
        {pictures.map((picture, index) => {
          return (
            <div className="pics" key={index}>
              <img src={picture.name} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </StyledGallery>
  );
};

export default Gallery;
