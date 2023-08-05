import styled from "styled-components";

export const SucccessPageStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    width: 80%;
    font-size: 6vw;
    text-align: center;
  }

  p {
    font-style: italic;
  }

  .buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
