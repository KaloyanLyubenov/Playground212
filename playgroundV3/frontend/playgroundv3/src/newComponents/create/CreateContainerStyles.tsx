import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #282936;
  color: white;

  .container {
    height: 110vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .content {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 100%;
    height: 10%;
  }

  .main {
    width: 100%;
    height: 80%;
  }

  .footer {
    width: 100%;
    height: 10%;
  }
`;
