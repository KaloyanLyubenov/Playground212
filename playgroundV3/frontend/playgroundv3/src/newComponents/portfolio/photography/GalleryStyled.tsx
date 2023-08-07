import styled from "styled-components";

export const StyledGallery = styled.div`
  margin-top: 40px;
  .gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;
    z-index: 0;
    padding-top: 10px;
  }

  .upload-form {
    margin-bottom: 12px;
    width: 100%;
  }

  .gallery .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .pics img {
    border-radius: 10px;
  }

  .gallery .pics:hover {
    filter: opacity(0.8);
  }

  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }

  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  .model img {
    width: auth;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }

  .closeIcon {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
  }

  .backwardsArrow {
    position: fixed;
    top: 49%;
    left: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
  }

  .forwardsArrow {
    position: fixed;
    top: 49%;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    .gallery {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-column-width: 50%;
      -moz-column-width: 50%;
      column-width: 50%;
      padding: 0 12px;
    }
  }

  @media (max-width: 480px) {
    .gallery {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
      -webkit-column-width: 100%;
      -moz-column-width: 100%;
      column-width: 100%;
      padding: 0 12px;
    }
  }
`;
