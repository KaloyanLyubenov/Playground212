import React, { useEffect, useState } from "react";
import "../styles/gallery.css";
import { S3 } from "aws-sdk";
import axios from "axios";
import ImageGetTry from "./ImageGetTry";

const Gallery = () => {
  const [imageNames, setImageNames] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get<string[]>("http://localhost:8080/pictures")
      .then((response) => {
        setImageNames(response.data);
      })
      .catch((error) => {
        console.log("Couldn't get image names!");
      });

    console.log("got image names");
  }, []);

  return (
    <>
      <ImageGetTry imageNames={imageNames} />
    </>
  );
};

export default Gallery;
