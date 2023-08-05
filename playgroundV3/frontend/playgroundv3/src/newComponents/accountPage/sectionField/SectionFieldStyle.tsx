import styled from "styled-components";

export const SectionFieldStyle = styled.div`
  flex: 1;

  .section {
    width: 100%;
    height: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bbbbbb;
    padding-bottom: 2vh;
  }

  .selected {
    width: 100%;
    background-color: #23f7dd;
  }

  .section p {
    color: white;
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
