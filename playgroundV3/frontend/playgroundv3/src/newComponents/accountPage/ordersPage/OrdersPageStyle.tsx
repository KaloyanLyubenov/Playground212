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
    align-items: center;
    background-color: #f3f0f0c6;
    box-shadow: 2px 2px 10px 1px #00000083;
    flex-shrink: 0;
  }

  .order-container p {
    flex: 1;
    margin: 0px;
    margin-left: 20px;
    color: #282936;
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
