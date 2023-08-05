import styled from "styled-components";

export const InfoContainer = styled.div`
  border-top: 0px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #21212a;

  .info-container {
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .minimise {
    cursor: pointer;
    top: 0px;
    position: relative;
    z-index: 110;
    width: 100%;
    height: 24px;
  }

  .location-title {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .location-description {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .submit-details-button {
    width: 30%;
    margin-top: 24px;
    margin-bottom: 15px;
    margin-right: 10%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .submit-details-button p {
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 22%;
  }

  .submit-details-button:hover p {
    animation: backgroundAnim 0.5s ease;
    background-color: #23f7dd;
    box-shadow: 0px 0 7px 3px #23f7dd;
    color: #21212a;
  }

  @keyframes backgroundAnim {
    0% {
      background-color: #21212a;
    }

    100% {
      background-color: #23f7dd;
      box-shadow: 0px 0 7px 3px #23f7dd;
      color: #21212a;
    }
  }
`;
