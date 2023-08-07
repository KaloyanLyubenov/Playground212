import { useEffect, useState } from "react";
import { OrdersPageStyle } from "./OrdersPageStyle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChatIcon from "@mui/icons-material/Chat";
import { motion } from "framer-motion";
import OrderDetailsBox from "./orderDetailsBox/OrderDetailsBox";
import ChatBox from "./chatBox/ChatBox";
import PayBox from "./payBox/PayBox";
import ImageIcon from "@mui/icons-material/Image";
import ImageUpload from "./imageUpload/ImageUpload";

type LocationPreview = {
  title: string;
  lat: number;
  lng: number;
};

type OrderPreview = {
  id: number;
  userEmail: string;
  locations: LocationPreview[];
  toPay: number;
};

type OrdersPageProps = {
  orders: OrderPreview[];
};

const OrdersPage: React.FC<OrdersPageProps> = ({ orders }) => {
  useEffect(() => {
    console.log(orders);
  }, [orders]);

  const [orderIDDetailed, setOrderIDDetailed] = useState(0);
  const [infoContentType, setContentType] = useState("none");

  const handleOrderClick = (id: number, contentType: string) => {
    if (orderIDDetailed !== id) {
      setOrderIDDetailed(id);
      setContentType(contentType);
    } else if (infoContentType !== contentType) {
      setContentType(contentType);
    } else {
      setOrderIDDetailed(0);
      setContentType("none");
    }
  };

  return (
    <OrdersPageStyle>
      {orders
        ? orders.map((order, index) => (
            <motion.div
              className="order-container"
              key={order.locations[0].lat + "." + order.locations[0].lng}
              initial={{ height: 70 }}
              animate={{
                height:
                  orderIDDetailed === order.id && infoContentType === "pay"
                    ? 500
                    : orderIDDetailed === order.id &&
                      infoContentType === "upload"
                    ? 460
                    : orderIDDetailed === order.id
                    ? 370
                    : 70,
              }}
              exit={{ height: 70 }}
            >
              <div className="order-preview">
                <p onClick={() => handleOrderClick(order.id, "order")}>
                  order id: {order.id}
                </p>
                {localStorage.getItem("email") === "nick@mail.com" ? (
                  <motion.div
                    className="pay icon"
                    whileHover={{ backgroundColor: "#bfbebec5", x: -5, y: -5 }}
                    onClick={() => handleOrderClick(order.id, "upload")}
                  >
                    <ImageIcon
                      style={{ width: "90%", height: "90%", color: "#282936" }}
                    />
                  </motion.div>
                ) : null}
                {order.toPay != 0 ||
                localStorage.getItem("email") === "nick@mail.com" ? (
                  <motion.div
                    className="pay icon"
                    whileHover={{ backgroundColor: "#bfbebec5", x: -5, y: -5 }}
                    onClick={() => handleOrderClick(order.id, "pay")}
                  >
                    <AttachMoneyIcon
                      style={{ width: "90%", height: "90%", color: "#282936" }}
                    />
                  </motion.div>
                ) : null}
                <motion.div
                  className="chat icon"
                  whileHover={{ backgroundColor: "#bfbebec5", x: -5, y: -5 }}
                  onClick={() => handleOrderClick(order.id, "chat")}
                >
                  <ChatIcon
                    style={{ width: "90%", height: "90%", color: "#282936" }}
                  />
                </motion.div>
              </div>
              {orders &&
              orderIDDetailed === order.id &&
              infoContentType === "order" ? (
                <OrderDetailsBox locations={order.locations} />
              ) : null}
              {orders &&
              orderIDDetailed === order.id &&
              infoContentType === "chat" ? (
                <ChatBox orderUserEmail={order.userEmail} orderID={order.id} />
              ) : null}
              {orders &&
              orderIDDetailed === order.id &&
              infoContentType === "pay" ? (
                <PayBox currentPrice={order.toPay} orderID={order.id} />
              ) : null}
              {orders &&
              orderIDDetailed === order.id &&
              infoContentType === "upload" ? (
                <ImageUpload
                  onSubmit={() => handleOrderClick(0, "none")}
                  orderID={order.id}
                />
              ) : null}
            </motion.div>
          ))
        : null}
    </OrdersPageStyle>
  );
};

export default OrdersPage;
