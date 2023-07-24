import React from "react";
import OrderContainer from "../../Order/OrderContainer";

function OrdersPage() {
  return (
    <>
      <div className="orders-list">
        <div className="order" key="1">
          <div className="title">
            <p>Order1</p>
          </div>
          <div className="button chat">Chat</div>
          <div className="button edit">Edit</div>
        </div>
        <div className="order-edit">{/* <OrderContainer /> */}</div>
        <div className="order" key="1">
          order2
        </div>
      </div>
    </>
  );
}

export default OrdersPage;
