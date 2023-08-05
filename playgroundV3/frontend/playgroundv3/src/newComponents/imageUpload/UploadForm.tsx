import React, {
  ChangeEvent,
  FormEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import { UploadInputForm } from "./UploadFormStyles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ImagePreview from "./ImagePreview";
import axios from "axios";
import { uploadFileToS3 } from "../../additionalFuntionality/s3";

interface SendProps {
  albumName: string;
  mediaType: string;
  timeOfDay: string;
  orderID: number;
  fileNames: string[];
  thumbnailPicName: string;
}

function UploadForm() {
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

    let data: SendProps = {
      albumName: "",
      mediaType: "",
      timeOfDay: "",
      orderID: 0,
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
    <>
      <UploadInputForm>
        <div className="upload-container">
          <div className="all-holder">
            <div className="icon-container">
              <input
                ref={fileInputRef}
                id="file"
                type="file"
                className="file-input"
                onChange={handleFileChange}
                multiple
              />

              <UploadFileIcon
                className="upload-icon"
                onClick={handleInputClick}
              />
            </div>
            <div className="info">
              <div className="images-container">
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
              {selectedFiles.length !== 0 ? (
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Title"
                    className="title-input"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <select
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
                  </select>
                  <select
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
                  </select>
                  <button className="submit-button" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </UploadInputForm>
    </>
  );
}

export default UploadForm;
