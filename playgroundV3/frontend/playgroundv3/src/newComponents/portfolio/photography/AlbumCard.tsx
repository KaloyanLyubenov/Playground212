import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../newStyles/portfolio/photography/albumCard.css";

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

interface AlbumCardProps {
  columns: number;
  album: Album;
  onChoose: (albumName: string) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ columns, album, onChoose }) => {
  const [width, setWidth] = useState("");
  const [height, setHeigth] = useState("");

  useEffect(() => {
    if (columns === 4) {
      setWidth("21vw");
      setHeigth("28vw");
    } else if (columns === 3) {
      setWidth("30vw");
      setHeigth("45vw");
    } else if (columns === 2) {
      setWidth("41vw");
      setHeigth("56vw");
    }
  }, []);

  return (
    <>
      <div className="card-container" style={{ width: width, height: height }}>
        <motion.div
          whileHover={{ x: 10, y: -12 }}
          className="card"
          onClick={() => onChoose(album.albumName)}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${album.thumbnailName})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="details">
            <p className="title">{album.albumName}</p>
            <div className="arrow-button">
              <div className="arrow hidden">
                <ArrowForwardIosIcon sx={{ color: "#50504F" }} />
              </div>
              <div className="arrow visible">
                <ArrowForwardIosIcon sx={{ color: "#50504F" }} />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="backdrop"></div>
      </div>
    </>
  );
};

export default AlbumCard;
