import styled from "styled-components";

export const StylizedPayBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input-field {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  input {
    width: 80%;
    height: 40px;
    appearance: none;
    border-style: none;
    border: 1px solid #939398;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    border-left: 0px;
    padding-left: 10px;
    font-size: 20px;
  }

  input:focus {
    outline: none;
    border: 1px solid #12786c;
  }

  .submit-button {
    width: 10%;
    background-color: #282936;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #282936;
    border-left: 0;
    cursor: pointer;
  }

  .submit-button p {
    margin: 0;
    color: #23f7dd;
    flex: 0 0 auto;
  }
`;
