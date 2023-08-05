import React, { useEffect, useState } from "react";
import "../../../newStyles/portfolio/photography/projectsPage.css";
import FourColumnView from "./views/FourColumnView";
import ThreeColumnView from "./views/ThreeColumnView";
import TwoColumnView from "./views/TwoColumnView";

function ProjectsPage() {
  const [maxWindowWidth, setMaxWindowWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);

  const handleWindowResize = () => {
    let width = window.innerWidth;
    let newColumns = 4;

    if (width < 950) {
      newColumns = 2;
    } else if (width < 1300) {
      newColumns = 3;
    }

    setColumns(newColumns);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    let width = window.innerWidth;
    let newColumns = 4;

    if (width < 950) {
      newColumns = 2;
    } else if (width < 1300) {
      newColumns = 3;
    }

    setColumns(newColumns);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {columns === 4 ? (
        <div className="project-container">
          <FourColumnView />
        </div>
      ) : null}
      {columns === 3 ? (
        <div className="project-container">
          <ThreeColumnView />
        </div>
      ) : null}
      {columns === 2 ? (
        <div className="project-container">
          <TwoColumnView />
        </div>
      ) : null}
    </>
  );
}

export default ProjectsPage;
