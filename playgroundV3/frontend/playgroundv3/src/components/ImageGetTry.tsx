import React, { useEffect, useState } from "react";
import { S3 } from "aws-sdk";
import axios from "axios";
import { Height, South } from "@mui/icons-material";
import "../styles/gallery.css";
import ImageUpload from "./ImageUpload";

function ImageGetTry() {
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [s3, setS3] = React.useState<S3 | null>(null);

  useEffect(() => {
    async function getS3Credentials() {
      try {
        const response = await axios.get("http://localhost:8080/s3/creds");
        const credentials = response.data;
        const s3 = new S3({
          region: credentials.region,
          accessKeyId: credentials.accessKey,
          secretAccessKey: credentials.secretKey,
        });
        setS3(s3);
      } catch (error) {
        console.error(error);
      }
    }
    getS3Credentials();
  }, []);

  useEffect(() => {
    axios
      .get<string[]>("http://localhost:8080/pictures")
      .then((response) => {
        setImageNames(response.data);
      })
      .catch((error) => {
        console.log("Couldn't get image names!");
      });

    console.log("got images");
  }, []);

  useEffect(() => {
    if (!s3 || imageNames.length === 0) return;

    const urls: string[] = [];

    async function getImage(name: string) {
      try {
        if (s3) {
          const response = await s3
            .getObject({
              Bucket: "kokomoko-playground-bucket",
              Key: name,
            })
            .promise();
          if (response.Body instanceof Uint8Array) {
            const blob = new Blob([response.Body], {
              type: response.ContentType,
            });
            const url = URL.createObjectURL(blob);
            urls.push(url);
          }
        }
      } catch (error) {
        console.error("couldn't get url for " + name);
      }
    }

    Promise.all(imageNames.map((name) => getImage(name))).then(() => {
      setImageUrls(urls);
    });
  }, [s3, imageNames]);

  return (
    <>
      <div className="gallery">
        {/* <div className="upload-form">
          <ImageUpload />
        </div> */}
        {imageUrls.map((url) => {
          return (
            <div className="pics">
              <img src={url} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageGetTry;
