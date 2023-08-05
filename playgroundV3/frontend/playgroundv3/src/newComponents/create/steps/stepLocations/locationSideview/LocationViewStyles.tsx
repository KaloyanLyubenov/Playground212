import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 97%;
  height: 8%;
  border: 1px solid white;
  border-radius: 15px;

  .location {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;
    z-index: 100;
  }

  .options {
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 150;
  }

  .option {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add {
    background-color: #479c4778;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .remove {
    background-color: #9c474778;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .info {
    background-color: #3277b791;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
