import styled from "styled-components";

export const UploadInputForm = styled.div`
  .upload-container {
    height: 100vh;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    background-color: #282936;
  }

  .all-holder {
    margin-top: 20px;
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed #23f7dd;
    border-radius: 10px;
  }

  .icon-container {
    margin-top: 10px;
    width: 100%;

    display: flex;
    justify-content: center;

    border-bottom: 1px dashed #23f7dd;
  }

  .file-input {
    width: 0px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 100%;
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  .image {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .upload-icon {
    width: 200px;
    height: 200px;
    cursor: pointer;
    color: #23f7dd;
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

  .inputs {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .title-input {
    width: 400px;
    font-size: 30px;
    border-radius: 10px;
    padding-left: 10px;
  }

  .submit-button {
    font-size: 30px;
  }

  select {
    font-size: 30px;
  }
`;
