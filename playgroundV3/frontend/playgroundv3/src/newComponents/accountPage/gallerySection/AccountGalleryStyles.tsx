import styled from "styled-components";

export const StyledGallery = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  overflow-y: auto;

  .image-box {
    height: 200px;
    width: 200px;
    border: 1px solid red;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .image-box p {
    background-color: white;
    padding: 8px;
    border-radius: 20px;
  }
`;
