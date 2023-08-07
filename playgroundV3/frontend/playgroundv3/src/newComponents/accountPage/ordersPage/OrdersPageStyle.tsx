import styled from "styled-components";

export const OrdersPageStyle = styled.div`
  height: 97%;
  width: 97%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .order-container {
    width: 98%;
    height: 70px;
    margin-top: 10px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    background-color: #f3f0f0c6;
    box-shadow: 2px 2px 10px 1px #00000083;
    flex-shrink: 0;
  }

  .order-preview {
    width: 100%;
    display: flex;
  }

  .details-box.order {
    display: flex;
    flex-direction: column;
  }

  .details-box.order h1 {
    margin: 0;
    text-align: center;
    color: #303030;
  }

  .order-details {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
  }

  .map {
    height: 200px;
    width: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-self {
    height: 200px;
    width: 400px;
    border-bottom-right-radius: 30px;
  }

  .locations {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
  }

  .location-preview {
    padding: 2px;
    border-radius: 6px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    background-color: white;
    height: 24px;
  }

  .locations .location-preview p {
    margin: 0px;
    flex: 0 0 auto;
    color: #303030;
  }

  .locations .location-preview .close-icon {
    margin: 0px;
    color: #303030;
  }

  .order-container p {
    flex: 1;
    margin: 0px;
    margin-left: 20px;
    color: #282936;
    margin-top: 23px;
    cursor: pointer;
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
