import React, { useEffect, useState } from "react";

function GalleriesPage() {
  const [orders, setOrders] = useState();
  useEffect(() => {}, []);

  return (
    <>
      <div className="order" key="1"></div>
      <div className="order" key="1"></div>
    </>
  );
}

export default GalleriesPage;
