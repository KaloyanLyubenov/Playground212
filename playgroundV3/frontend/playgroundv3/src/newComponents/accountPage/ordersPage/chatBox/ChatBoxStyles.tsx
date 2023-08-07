import styled from "styled-components";

export const StyledChatBox = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  .messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-height: 270px;
    flex-grow: 1;
    overflow-y: auto;
  }

  .message {
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
  }

  .message-content {
    display: flex;
    flex-direction: row;
    gap: 2px;
  }

  .message-content p {
    margin: 0;
  }

  .sent {
    background-color: #23f7dd;
    align-self: flex-start;
  }

  .received {
    background-color: #f3f3f3;
    align-self: flex-end;
  }

  .input-field {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .input-field input {
    width: 90%;
    height: 40px;
    appearance: none;
    border-style: none;
    border: 1px solid #939398;
    border-bottom-left-radius: 30px;
    border-left: 0px;
    padding-left: 10px;
    font-size: 20px;
  }

  .input-field input:focus {
    outline: none;
    border: 1px solid #12786c;
  }

  .send-button {
    width: 10%;
    background-color: #282936;
    border-bottom-right-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #282936;
    border-left: 0;
    cursor: pointer;
  }

  .send-button p {
    margin: 0;
    color: #23f7dd;
    flex: 0 0 auto;
  }
`;
