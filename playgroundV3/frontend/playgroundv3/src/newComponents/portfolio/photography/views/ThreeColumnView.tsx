import React, { useState } from "react";
import OptionList from "../OptionLIst";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AlbumCard from "../AlbumCard";
import "../../../../newStyles/portfolio/photography/threeColumnView.css";

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

type ViewProps = {
  albums: Album[];
  chooseAlbum: (albumName: string) => void;
  mediaTypeChoice: (option: string) => void;
  timeOfDayChoice: (option: string) => void;
};

const ThreeColumnView: React.FC<ViewProps> = ({
  albums,
  chooseAlbum,
  mediaTypeChoice,
  timeOfDayChoice,
}) => {
  const [isTypeHovered, setIsTypeHovered] = useState(false);
  const [isCityHovered, setIsCityHovered] = useState(false);

  return (
    <>
      <div className="three-column-view">
        <div className="empty-start">
          <div className="empty-box">
            <div className="border-box first"></div>
            <div className="border-box"></div>
            <div className="border-box"></div>
          </div>
        </div>
        <div className="title-section">
          <div className="title">PHOTOGRAPHY</div>
          <div className="border-boxes">
            <div className="border-box first"></div>
            <div className="border-box">
              <div
                className="options-container"
                onMouseEnter={() => setIsTypeHovered(true)}
                onMouseLeave={() => setIsTypeHovered(false)}
              >
                {isTypeHovered ? (
                  <OptionList
                    items={["Cars", "Portrait", "Landscape", "Event"]}
                    onChoice={mediaTypeChoice}
                  />
                ) : null}
                <div className="option" onClick={() => mediaTypeChoice("")}>
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
                {isCityHovered ? (
                  <OptionList
                    items={["Day", "Night"]}
                    onChoice={timeOfDayChoice}
                  />
                ) : null}
                <div className="option" onClick={() => timeOfDayChoice("")}>
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
              {albums.map((album, index) =>
                (index + 1) % 3 === 1 ? (
                  <AlbumCard columns={3} album={album} onChoose={chooseAlbum} />
                ) : null
              )}
            </div>
            <div className="column two">
              {albums.map((album, index) =>
                (index + 1) % 3 === 2 ? (
                  <AlbumCard columns={3} album={album} onChoose={chooseAlbum} />
                ) : null
              )}
            </div>
            <div className="column three">
              {albums.map((album, index) =>
                (index + 1) % 3 === 0 ? (
                  <AlbumCard columns={3} album={album} onChoose={chooseAlbum} />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumnView;
