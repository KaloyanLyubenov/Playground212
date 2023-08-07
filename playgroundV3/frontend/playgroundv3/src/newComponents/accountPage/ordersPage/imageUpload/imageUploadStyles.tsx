import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;

  .upload-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1;
  }

  .upload-area select {
    width: 75%;
    height: 40px;
    font-size: 20px;
    border: none;
    background: white;
    margin: 0;
    padding: 0;
    outline: none;
    font: inherit;
    color: inherit;
    border-radius: 15px;
    padding-left: 10px;
  }

  .file-input {
    display: none;
  }

  .title-input {
    width: 70%;
    height: 40px;
    font-size: 20px;
    border: none;
    background: white;
    margin: 0;
    padding: 0;
    outline: none;
    font: inherit;
    color: inherit;
    border-radius: 15px;
    padding-left: 10px;
  }

  .title-input::placeholder {
    font-size: 20px;
  }

  .submit-button {
    width: 75%;
    height: 40px;
    border-radius: 15px;
    border: 0;
  }

  .preview-area {
    width: 75%;
    height: 100%;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 20px;
  }

  .image {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .remove-button {
    margin-top: 6px;
    margin-left: 6px;
    background-color: white;
    border-radius: 12px;
  }

  .image.selected {
    border: 2px solid #23f7dd;
  }
`;
