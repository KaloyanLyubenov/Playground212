import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
import MiniMenu from "./MiniMenu";

interface NavBarProps {
  onPageChange: (newPage: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onPageChange }) => {
  const [style, setStyle] = useState("mini-menu-invisible");
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [isUserlogged, setIsUserLogged] = useState(false);

  const handleMiniMenuClick = () => {
    if (style === "mini-menu-invisible") {
      setStyle("mini-menu-vissible");
    } else {
      setStyle("mini-menu-invisible");
    }
  };

  const handlePageChoice = (newPage: string) => {
    onPageChange(newPage);
    setStyle("mini-menu-invisible");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    console.log("Logged out");
    window.location.reload();
  };

  useEffect(() => {
    const hasPlayedAnimation = sessionStorage.getItem("animationPlayed");

    if (hasPlayedAnimation) {
      setAnimationPlayed(true);
    } else {
      sessionStorage.setItem("animationPlayed", "true");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token === null || token === "") {
      setIsUserLogged(false);
    } else {
      setIsUserLogged(true);
    }
  });

  return (
    <>
      <header>
        <div className="header-items">
          <div className="spacer left"></div>
          <div className="header-logo">
            <p>logo</p>
          </div>
          <nav className={`header-menu${animationPlayed ? "" : "-animate"}`}>
            <div className="item">
              <a href="/home">Home</a>
            </div>
            <div className="item">
              <a href="">About</a>
            </div>
            <div className="item">
              <a href="">Automotive</a>
            </div>
            <div className="item">
              <a href="">Peronal</a>
            </div>
            <div className="item">
              <a href="">Shoot</a>
            </div>
            <div className={`item register${isUserlogged ? " invisible" : ""}`}>
              <a
                onClick={() => {
                  handlePageChoice("register");
                }}
              >
                Sign up
              </a>
            </div>
            <div className={`item sign-out${isUserlogged ? "" : " invisible"}`}>
              <a
                onClick={() => {
                  handleLogOut();
                }}
              >
                Sign out
              </a>
            </div>
            <div className="item">
              <a href="/upload">Upload</a>
            </div>
          </nav>
          <div className="small-icon-container">
            <div className="small-icon" onClick={() => handleMiniMenuClick()}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="spacer right"></div>
        </div>
        <div className={style}>
          <MiniMenu onPageChange={handlePageChoice} />
        </div>
      </header>
    </>
  );
};

export default NavBar;
