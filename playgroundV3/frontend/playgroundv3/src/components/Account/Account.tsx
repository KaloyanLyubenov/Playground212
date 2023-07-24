import React, { useState } from "react";
import "../../styles/account.css";
import OrdersPage from "./Pages/OrdersPage";
import GalleriesPage from "./Pages/GalleriesPage";
import SettingsPage from "./Pages/SettingsPage";

function Account() {
  const [page, setPage] = useState("orders");

  return (
    <>
      <div className="account-page">
        <div className="pages-list">
          <div className="page orders" onClick={() => setPage("orders")}>
            Orders
          </div>
          <div className="page galleries" onClick={() => setPage("galleries")}>
            Galleries
          </div>
          <div className="page settings" onClick={() => setPage("settings")}>
            Settings
          </div>
        </div>
        <div className="page-content">
          {page === "orders" && <OrdersPage />}
          {page === "galleries" && <GalleriesPage />}
          {page === "settings" && <SettingsPage />}
        </div>
      </div>
    </>
  );
}

export default Account;
