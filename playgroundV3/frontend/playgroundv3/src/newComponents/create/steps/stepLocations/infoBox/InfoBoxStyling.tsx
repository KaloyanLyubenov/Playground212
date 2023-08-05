import styled from "styled-components";

export const InfoContainer = styled.div`
  border-top: 0px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #21212a;

  .info-container {
    width: 100%;
    height: 95%;
  }

  .minimise {
    cursor: pointer;
    top: 0px;
    position: relative;
    z-index: 110;
    height: 100%;
    width: 24px;
  }

  .location-title {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location-title h1 {
    position: relative;
    width: 100%;
  }

  .location-description {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location-description p {
    margin: 0;
  }

  .best-for {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .best-for p {
    margin: 0;
  }
`;
