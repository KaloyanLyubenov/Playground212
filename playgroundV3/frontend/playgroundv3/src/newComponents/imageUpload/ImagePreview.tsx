import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

interface ImageComponentProps {
  file: File;
  thumbnailName: string;
  handleSelectThumbnail: (filename: string) => void;
  handleRemoveImage: (file: File) => void;
}

const ImagePreview: React.FC<ImageComponentProps> = ({
  file,
  thumbnailName,
  handleSelectThumbnail,
  handleRemoveImage,
}) => (
  <div key={file.name} className="image">
    <div
      className={`image ${thumbnailName === file.name ? "selected" : ""}`}
      style={{
        backgroundImage: `url(${URL.createObjectURL(file)})`,
      }}
      onClick={() => handleSelectThumbnail(file.name)}
    >
      <CancelIcon
        className="remove-button"
        onClick={() => handleRemoveImage(file)}
      />
    </div>
  </div>
);

export default React.memo(ImagePreview);
