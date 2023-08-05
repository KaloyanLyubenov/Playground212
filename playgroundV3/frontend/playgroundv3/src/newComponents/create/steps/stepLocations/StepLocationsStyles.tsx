import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  .map-view {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .locations {
    width: 20%;
    height: 95%;
  }

  .locations-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .submit-button {
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .submit-button p {
    margin: 0;
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
    height: 30%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .close-icon {
    margin-top: 5px;
    margin-left: 5px;
    position: absolute;
  }
`;
