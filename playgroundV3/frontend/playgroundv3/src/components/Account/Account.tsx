import React, { useEffect, useRef, useState } from "react";
import "../../styles/account.css";
import OrdersPage from "./Pages/OrdersPage";
import AlbumsPage from "./Pages/AlbumsPage";
import SettingsPage from "./Pages/SettingsPage";
import axios from "axios";
import BetterChat from "../BetterChat";

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

interface OrderPreview {
  id: number;
  title: string;
}

interface Album {
  title: string;
  urls: string[];
}

interface AccountInformation {
  userDetails: UserDetails;
  orders: OrderPreview[];
  albums: Album[];
}

function Account() {
  const [page, setPage] = useState("orders");
  const [orders, setOrders] = useState<OrderPreview[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/accounts/${localStorage.getItem("email")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        let data: AccountInformation = response.data;
        setOrders(data.orders);
        setAlbums(data.albums);
        setUserDetails(data.userDetails);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("Couldn't find user details!");
      });
  }, []);

  return (
    <>
      {loaded && (
        <div className="account-page">
          <div className="pages-list">
            <div className="page orders" onClick={() => setPage("orders")}>
              Orders
            </div>
            <div className="page galleries" onClick={() => setPage("albums")}>
              Albums
            </div>
            <div className="page settings" onClick={() => setPage("settings")}>
              Settings
            </div>
          </div>
          <div className="page-content">
            {page === "orders" && <OrdersPage orders={orders} />}
            {page === "albums" && <AlbumsPage albums={albums} />}
            {page === "settings" && <SettingsPage />}
          </div>
          <BetterChat orderName="GG" userEmail={userDetails.email} />
        </div>
      )}
    </>
  );
}

export default Account;
