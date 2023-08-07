import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ImageUploadContainer } from "./imageUploadStyles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import { uploadFileToS3 } from "../../../../additionalFuntionality/s3";
import { motion } from "framer-motion";
import ImagePreview from "../../../imageUpload/ImagePreview";
import { NumericalBotVersion } from "aws-sdk/clients/lexmodelsv2";

interface SendProps {
  albumName: string;
  mediaType: string;
  timeOfDay: string;
  orderID: number;
  fileNames: string[];
  thumbnailPicName: string;
}

type ImageUploadProps = {
  onSubmit: () => void;
  orderID: number;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ onSubmit, orderID }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [thumbnailName, setThumbnailName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function changeFileName(file: File, newFileName: string): File {
    return new File([file], newFileName, { type: file.type });
  }

  const setFileNames = async (files: File[]) => {
    const renamedFiles = await Promise.all(
      files.map(async (file) => {
        const time = performance.now();
        const newFileName = `${time}_${file.name}`;
        return await changeFileName(file, newFileName);
      })
    );

    return renamedFiles;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files.length !== 0) {
        setFileNames(Array.from(e.target.files)).then((renamedFiles) => {
          setSelectedFiles(renamedFiles);
        });
      }
    }
  };

  const handleRemoveImage = (file: File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const handleSelectThumbnail = (filename: string) => {
    setThumbnailName(filename);
  };

  const handleInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      title !== "" &&
      type !== "" &&
      timeOfDay !== "" &&
      thumbnailName !== ""
    ) {
      let data: SendProps = {
        albumName: "",
        mediaType: "",
        timeOfDay: "",
        orderID: orderID,
        thumbnailPicName: "",
        fileNames: [],
      };

      data.albumName = title;
      data.mediaType = type;
      data.timeOfDay = timeOfDay;
      data.thumbnailPicName = thumbnailName;

      selectedFiles.forEach((file) => {
        data.fileNames.push(file.name);
      });

      console.log(data);
      saveInDB(data);
      uploadToS3();
      onSubmit();
    } else {
      window.alert("Please fill the nescessary fields!");
    }
  };

  const saveInDB = async (data: SendProps) => {
    try {
      await axios.post("http://localhost:8080/albums", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      });

      console.log("Files saved in DB!");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const uploadToS3 = async () => {
    try {
      const fileNames = selectedFiles.map((file) => file.name);
      const token = localStorage.getItem("token");

      const apiClient = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];

        uploadFileToS3(file);
        console.log(`file: ${file.name} uploaded succesfully`);
      }
    } catch (error) {
      console.log(error);
    }
    alert("Image upload complete");

    setSelectedFiles([]);
    setTimeOfDay("");
    setTitle("");
    setType("");
  };

  return (
    <ImageUploadContainer>
      <div className="upload-area">
        <motion.div onClick={handleInputClick} whileHover={{ x: 3, y: -3 }}>
          <UploadFileIcon
            style={{
              color: "#23f7dd",
              width: "200px",
              height: "180px",
              cursor: "pointer",
            }}
          />
        </motion.div>
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          id="file"
          type="file"
          className="file-input"
          multiple
        />
        {selectedFiles.length !== 0 ? (
          <>
            <input
              type="text"
              placeholder="Title"
              className="title-input"
              onChange={(e) => setTitle(e.target.value)}
            />
            <motion.select
              whileHover={{ x: 3, y: -3 }}
              name="media-type"
              id="media-type"
              className="media-type-select"
              defaultValue={"option0"}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="option0" disabled>
                Select type
              </option>
              <option value="Cars">Cars</option>
              <option value="Portrait">Portrait</option>
              <option value="Landscape">Landscape</option>
              <option value="Event  ">Event</option>
            </motion.select>
            <motion.select
              whileHover={{ x: 3, y: -3 }}
              name="time-of-day"
              id="media-type"
              className="media-type-select"
              defaultValue={"option0"}
              onChange={(e) => setTimeOfDay(e.target.value)}
            >
              <option value="option0" disabled>
                Select time of day
              </option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </motion.select>
            <motion.button
              whileHover={{ x: 3, y: -3 }}
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
          </>
        ) : null}
      </div>
      <div className="preview-area">
        {selectedFiles.length !== 0 ? (
          <>
            {selectedFiles.map((file) => (
              <ImagePreview
                key={file.name}
                file={file}
                thumbnailName={thumbnailName}
                handleSelectThumbnail={handleSelectThumbnail}
                handleRemoveImage={handleRemoveImage}
              />
            ))}
          </>
        ) : null}
      </div>
    </ImageUploadContainer>
  );
};

export default ImageUpload;
