import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 40px;
  height: 96vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282936;
  color: white;
  overflow-y: none;

  h1 {
    text-align: center;
  }

  .box {
    width: 80%;
    height: 80%;
  }

  .map-view {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .locations-list {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
  }

  .locations {
    height: 90%;
    width: 98%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .submit-button {
    width: 95%;
    height: 7%;
    border-radius: 15px;
    border: 1px solid white;
    text-align: center;
    cursor: pointer;
  }

  .map-container {
    width: 80%;
    height: 100%;
  }

  .map {
    width: 100%;
  }

  .map-self {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  .map-self.has-info {
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .location-details {
    width: 100%;
    height: 20%;
    background-color: #1d1e26;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    justify-content: space-between;
  }

  .close-icon {
    margin-top: 5px;
    margin-left: 5px;
    position: absolute;
    width: 20px;
    height: 20px;
  }

  .settings {
    width: 90%;
    height: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }

  .inputs {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  input {
    width: 45%;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
  }

  .selects {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  select {
    width: 30%;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
  }

  .apply-button {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .apply-button:hover {
    border: 1px solid white;
    border-bottom-right-radius: 30px;
  }
`;
