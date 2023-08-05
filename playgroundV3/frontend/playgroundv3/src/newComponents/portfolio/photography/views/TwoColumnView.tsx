import React, { useState } from "react";
import OptionList from "../OptionLIst";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AlbumCard from "../AlbumCard";
import "../../../../newStyles/portfolio/photography/twoColumnView.css";

function FourColumnView() {
  const [isTypeHovered, setIsTypeHovered] = useState(false);
  const [isCityHovered, setIsCityHovered] = useState(false);

  return (
    <>
      <div className="two-column-view">
        <div className="empty-start">
          <div className="empty-box">
            <div className="border-box first"></div>
            <div className="border-box"></div>
          </div>
        </div>
        <div className="title-section">
          <div className="title">PHOTOGRAPHY</div>
          <div className="border-boxes">
            <div className="border-box first">
              <div
                className="options-container"
                onMouseEnter={() => setIsTypeHovered(true)}
                onMouseLeave={() => setIsTypeHovered(false)}
              >
                {isTypeHovered ? (
                  <OptionList
                    items={["Cars", "Portrait", "Landscape", "Event"]}
                  />
                ) : null}
                <div className="option">
                  <p className="filter-option">Type</p>
                  <KeyboardArrowDownIcon className="arrow" />
                </div>
              </div>
            </div>
            <div className="border-box">
              <div
                className="options-container"
                onMouseEnter={() => setIsCityHovered(true)}
                onMouseLeave={() => setIsCityHovered(false)}
              >
                {isCityHovered ? <OptionList items={["Day", "Night"]} /> : null}
                <div className="option">
                  <p className="filter-option">Time of day</p>
                  <KeyboardArrowDownIcon className="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-section">
          <div className="columns-box">
            <div className="column one">
              <AlbumCard columns={2} />
            </div>
            <div className="column two">
              <AlbumCard columns={2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourColumnView;
