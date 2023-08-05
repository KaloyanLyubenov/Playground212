import React, { useEffect, useState } from "react";
import "../newStyles/logoHeader.css";

function LogoContainer() {
  const [logoWidth, setLogoWidth] = useState(100);
  const [logoFontSize, setLogoFontSize] = useState(11.3);
  const [logoBlack, setLogoBlack] = useState(false);

  const handleScroll = () => {
    const scrollOffset = window.scrollY;

    const scrollRange = 540;
    const initialFont = 11.3;
    const finalFont = 1.8;

    const newFontSize =
      initialFont - (scrollOffset / scrollRange) * (initialFont - finalFont);

    if (newFontSize >= 1.8) {
      setLogoFontSize(newFontSize);
      setLogoBlack(false);
    } else {
      setLogoFontSize(finalFont);
      setLogoBlack(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <p
      className="big-logo"
      style={{
        fontSize: logoBlack ? "2.2rem" : `${logoFontSize}vw`,
        color: logoBlack ? "black" : "white",
      }}
    >
      FORBIDDEN MEDIA
    </p>
  );
}

export default LogoContainer;
