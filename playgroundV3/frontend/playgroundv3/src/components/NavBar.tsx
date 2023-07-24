import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
import MiniMenu from "./MiniMenu";

interface NavBarProps {
  onPageChange: (newPage: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onPageChange }) => {
  const [style, setStyle] = useState<string>("mini-menu-invisible");
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
  const [isUserlogged, setIsUserLogged] = useState<boolean>(false);
  const [userRoles, setUserRoles] = useState<string[]>();

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
    localStorage.removeItem("userRoles");
    console.log("Logged out");
    window.location.assign("/");
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

    if (token === null || token === "") {
      setIsUserLogged(false);
    } else {
      setIsUserLogged(true);
      setUserRoles(JSON.parse(localStorage.getItem("userRoles") as string));
      console.log(userRoles);
    }
  }, []);

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
              <a href="/">Home</a>
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
            {userRoles && (
              <div
                className={`item shoot${
                  userRoles.includes("ADMIN") || userRoles.includes("MODERATOR")
                    ? " invisible"
                    : ""
                }`}
              >
                <a href="/order">Shoot</a>
              </div>
            )}
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
            {userRoles && (
              <div
                className={`item upload${
                  userRoles.includes("ADMIN") ? "" : " invisible"
                }`}
              >
                <a href="/upload">Upload</a>
              </div>
            )}
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
