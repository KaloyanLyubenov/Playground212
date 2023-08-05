import React, { useEffect, useState } from "react";
import { StylizedAccountContainer } from "./AccountContainerStyle";
import { motion } from "framer-motion";
import SectionField from "./sectionField/SectionField";
import OrdersPage from "./ordersPage/OrdersPage";

function AccountContainer() {
  const [hoveredSection, setHoveredSection] = useState("none");
  const [selectedSection, setSelectedSection] = useState("orders");

  return (
    <StylizedAccountContainer>
      <h1>Kaloyan Lyubenov</h1>
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
          {selectedSection === "orders" ? <OrdersPage /> : null}
        </div>
      </div>
    </StylizedAccountContainer>
  );
}

export default AccountContainer;
