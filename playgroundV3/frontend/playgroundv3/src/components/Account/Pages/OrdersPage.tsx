import React from "react";
import OrderContainer from "../../Order/OrderContainer";

interface OrderPreview {
  id: number;
  title: string;
}

interface OrdersPageProps {
  orders: OrderPreview[];
}

const OrdersPage: React.FC<OrdersPageProps> = ({ orders }) => {
  return (
    <>
      <div className="orders-list">
        {orders &&
          orders.map((order) => {
            return (
              <div className="order" key={order.id}>
                <div className="title">
                  <p>{order.title}</p>
                </div>
                <div className="button chat">Chat</div>
                <div className="button edit">Edit</div>
              </div>
            );
          })}
        <div className="order-edit">{/* <OrderContainer /> */}</div>
        <div className="order" key="2">
          order2
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
