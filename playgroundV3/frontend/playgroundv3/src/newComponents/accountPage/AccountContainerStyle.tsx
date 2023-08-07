import styled from "styled-components";

export const StylizedAccountContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #23f7dd;
    font-family: "Inter";
    font-size: 4vw;
  }

  .main-view {
    height: 80vh;
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #454655;
    border-radius: 8px;
  }

  .options-menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
  }
`;

//         background-color: #282936;
//         color: #23f7dd;
//#00000083
