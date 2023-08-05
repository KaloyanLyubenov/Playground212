import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../newStyles/portfolio/photography/albumCard.css";

interface AlbumCardProps {
  columns: number;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ columns }) => {
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
        <motion.div whileHover={{ x: 10, y: -12 }} className="card">
          <div className="image"></div>
          <div className="details">
            <p className="title">Title</p>
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
