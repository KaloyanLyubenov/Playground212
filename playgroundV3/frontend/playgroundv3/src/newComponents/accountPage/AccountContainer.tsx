import React, { useEffect, useState } from "react";
import { StylizedAccountContainer } from "./AccountContainerStyle";
import { motion } from "framer-motion";
import SectionField from "./sectionField/SectionField";
import OrdersPage from "./ordersPage/OrdersPage";
import axios from "axios";

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

function AccountContainer() {
  const [hoveredSection, setHoveredSection] = useState("none");
  const [selectedSection, setSelectedSection] = useState("orders");
  const [orders, setOrders] = useState<OrderPreview[] | null>(null);

  useEffect(() => {
    if (localStorage.getItem("email") === "nick@mail.com") {
      axios
        .get(`http://localhost:8080/orders/admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        })
        .then((response) => {
          setOrders(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Couldn't get orders!");
        });
    } else {
      axios
        .get(`http://localhost:8080/orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        })
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.log("Couldn't get orders!");
        });
    }
  }, []);

  return (
    <StylizedAccountContainer>
      <h1>{localStorage.getItem("email")}</h1>
      <div className="main-view">
        <div className="options-menu">
          <SectionField
            sectionName="Orders"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            hoveredSection={hoveredSection}
            setHoveredSection={setHoveredSection}
          />
          <SectionField
            sectionName="Gallery"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            hoveredSection={hoveredSection}
            setHoveredSection={setHoveredSection}
          />
          <SectionField
            sectionName="Settings"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            hoveredSection={hoveredSection}
            setHoveredSection={setHoveredSection}
          />
        </div>
        <div className="content">
          {selectedSection === "orders" && orders ? (
            <OrdersPage orders={orders} />
          ) : null}
        </div>
      </div>
    </StylizedAccountContainer>
  );
}

export default AccountContainer;
