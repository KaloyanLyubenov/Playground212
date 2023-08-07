import React, { useEffect, useState } from "react";
import { StylizedAccountContainer } from "./AccountContainerStyle";
import { motion } from "framer-motion";
import SectionField from "./sectionField/SectionField";
import OrdersPage from "./ordersPage/OrdersPage";
import axios from "axios";
import AccountGallery from "./gallerySection/AccountGallery";

type Picture = {
  name: string;
};

type Album = {
  albumName: string;
  thumbnailName: string;
  timeOfDay: string;
  mediaType: string;
  pictures: Picture[];
};

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
  const [albums, setAlbums] = useState<Album[] | null>(null);

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
    axios
      .get(`http://localhost:8080/albums`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log("Couldn't get albums!");
      });
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
          {selectedSection === "gallery" && albums ? (
            <AccountGallery albums={albums} />
          ) : null}
        </div>
      </div>
    </StylizedAccountContainer>
  );
}

export default AccountContainer;
