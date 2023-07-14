import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../styles/imageUpload.css";
import axios from "axios";
import { error } from "console";

function ImageUpload() {
  const fileInput = document.querySelector("#file") as HTMLInputElement;

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);
  const [mediaType, setMediaType] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    axios
      .get<string[]>("http://localhost:8080/media-types")
      .then((response) => {
        setMediaTypes(response.data);
      })
      .catch((error) => {
        console.log("Couldn't get media types!");
      });
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...e.target.files]);
    }
  };

  const handleMediaTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMediaType(e.target.value);
  };

  const handleAlbumNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("albumName", albumName);
    formData.append("mediaType", mediaType);
    const email = localStorage.getItem("userEmail");

    if (email) {
      formData.append("ownerEmail", email);
    }

    selectedFiles.forEach((file) => {
      formData.append(`files`, file, file.name);
    });

    try {
      await axios.post("http://localhost:8080/picture/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Files uploaded successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  // const handleInputClick = () => {
  //   if (fileInput) {
  //     fileInput.click();
  //   }
  // };

  return (
    <div className="container">
      <div className="header">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>{" "}
        <p>Browse File to upload!</p>
      </div>
      <input id="file" type="file" onChange={handleFileChange} multiple />
      <div className="input-holder">
        <div className="album-name-holder">
          <div className="album-name-label-holder">
            <label htmlFor="album-name" className="album-name-label">
              Album Name:{" "}
            </label>
          </div>
          <input
            className="album-name-input"
            placeholder="Name"
            onChange={handleAlbumNameChange}
          />
        </div>
        <div className="media-type-holder">
          <div className="media-type-label-holder">
            <label htmlFor="media-type-select" className="media-type-label">
              Media type:
            </label>
          </div>
          <select
            id="media-type-select"
            name="media-type-select"
            onChange={handleMediaTypeChange}
          >
            {mediaTypes.map((type) => {
              return <option className="select-option">{type}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="button-holder">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
