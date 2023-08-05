import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;

  input {
    width: 100%;
    height: 90%;
    border-style: none;
    border: 1px solid black;
    border-color: white;
    border-top-left-radius: 10vh;
    border-bottom-left-radius: 10vh;
    border-right: 0px;
    padding: 0px 30px;
    font-size: 20px;
    font-style: italic;
    color: #282936;
  }

  /* input:focus {
    box-shadow: -2px 0 5px 1px #23f7dd;
    outline: none;
  } */

  .text-container {
    width: 20%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-color: white;
    border-top-right-radius: 10vh;
    border-bottom-right-radius: 10vh;
    cursor: pointer;
  }

  p {
    margin: 0px;
    margin-right: 10px;
    font-size: 2.5vw;
  }
`;
