import React, { useEffect, useState } from "react";
import "../../../newStyles/portfolio/photography/projectsPage.css";
import FourColumnView from "./views/FourColumnView";
import ThreeColumnView from "./views/ThreeColumnView";
import TwoColumnView from "./views/TwoColumnView";
import axios from "axios";
import { getFileS3Url } from "../../../additionalFuntionality/s3";
import Gallery from "./Gallery";

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

function ProjectsPage() {
  const [maxWindowWidth, setMaxWindowWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);
  const [vissibleAlbums, setVissibleAlbums] = useState<Album[]>([]);
  const [allAlbums, setAllAlbums] = useState<Album[]>([]);
  const [visibleGalleryName, setVisisbleGalleryName] = useState("");
  const [albumToDisplay, setAlbumToDisplay] = useState<Album | null>(null);
  const [mediaTypeFilter, setmediaTypeFIlter] = useState<string>("");
  const [timeOfDayFilter, setTimeOfDayFilter] = useState<string>("");

  useEffect(() => {
    if (visibleGalleryName !== "") {
      vissibleAlbums.map((album) => {
        if (album.albumName === visibleGalleryName) {
          setAlbumToDisplay(album);
        }
      });
    } else {
      setAlbumToDisplay(null);
    }
  }, [visibleGalleryName]);

  useEffect(() => {
    console.log(
      "time of day: " + timeOfDayFilter + " mediaType: " + mediaTypeFilter
    );
    if (mediaTypeFilter !== "" && timeOfDayFilter !== "") {
      let newAlbumsList = allAlbums
        .filter(
          (album) =>
            album.mediaType === mediaTypeFilter &&
            album.timeOfDay === timeOfDayFilter
        )
        .map((newAlbumsList) => ({
          albumName: newAlbumsList.albumName,
          thumbnailName: newAlbumsList.thumbnailName,
          timeOfDay: newAlbumsList.timeOfDay,
          mediaType: newAlbumsList.mediaType,
          pictures: newAlbumsList.pictures,
        }));
      setVissibleAlbums(newAlbumsList);
    } else if (mediaTypeFilter !== "") {
      let newAlbumsList = allAlbums
        .filter((album) => album.mediaType === mediaTypeFilter)
        .map((newAlbumsList) => ({
          albumName: newAlbumsList.albumName,
          thumbnailName: newAlbumsList.thumbnailName,
          timeOfDay: newAlbumsList.timeOfDay,
          mediaType: newAlbumsList.mediaType,
          pictures: newAlbumsList.pictures,
        }));
      setVissibleAlbums(newAlbumsList);
    } else if (timeOfDayFilter !== "") {
      let newAlbumsList = allAlbums
        .filter((album) => album.timeOfDay === timeOfDayFilter)
        .map((newAlbumsList) => ({
          albumName: newAlbumsList.albumName,
          thumbnailName: newAlbumsList.thumbnailName,
          timeOfDay: newAlbumsList.timeOfDay,
          mediaType: newAlbumsList.mediaType,
          pictures: newAlbumsList.pictures,
        }));
      setVissibleAlbums(newAlbumsList);
    } else if (timeOfDayFilter === "" && mediaTypeFilter === "") {
      setVissibleAlbums(allAlbums);
    }
  }, [mediaTypeFilter, timeOfDayFilter]);

  const handleWindowResize = () => {
    let width = window.innerWidth;
    let newColumns = 4;

    if (width < 950) {
      newColumns = 2;
    } else if (width < 1300) {
      newColumns = 3;
    }

    setColumns(newColumns);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    let width = window.innerWidth;
    let newColumns = 4;

    if (width < 950) {
      newColumns = 2;
    } else if (width < 1300) {
      newColumns = 3;
    }

    setColumns(newColumns);
    let receivedAlbums: Album[] = [];

    axios
      .get(`http://localhost:8080/albums/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        receivedAlbums = response.data;
        receivedAlbums.map((album) => {
          album.pictures.map((pic) => {
            pic.name = getFileS3Url(pic.name);
          });
          album.thumbnailName = getFileS3Url(album.thumbnailName);
        });

        setVissibleAlbums(receivedAlbums);
        setAllAlbums(receivedAlbums);

        console.log(receivedAlbums);
      })
      .catch((error) => {
        console.log("Couldn't get albums!");
      });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {columns === 4 && visibleGalleryName === "" ? (
        <div className="project-container">
          <FourColumnView
            albums={vissibleAlbums}
            chooseAlbum={setVisisbleGalleryName}
            mediaTypeChoice={setmediaTypeFIlter}
            timeOfDayChoice={setTimeOfDayFilter}
          />
        </div>
      ) : null}
      {columns === 3 && visibleGalleryName === "" ? (
        <div className="project-container">
          <ThreeColumnView
            albums={vissibleAlbums}
            chooseAlbum={setVisisbleGalleryName}
            mediaTypeChoice={setmediaTypeFIlter}
            timeOfDayChoice={setTimeOfDayFilter}
          />
        </div>
      ) : null}
      {columns === 2 && visibleGalleryName === "" ? (
        <div className="project-container">
          <TwoColumnView
            albums={vissibleAlbums}
            chooseAlbum={setVisisbleGalleryName}
            mediaTypeChoice={setmediaTypeFIlter}
            timeOfDayChoice={setTimeOfDayFilter}
          />
        </div>
      ) : null}
      {visibleGalleryName !== "" && albumToDisplay ? (
        <div>
          <Gallery
            pictures={albumToDisplay.pictures}
            onClose={setVisisbleGalleryName}
          />
        </div>
      ) : null}
    </>
  );
}

export default ProjectsPage;
