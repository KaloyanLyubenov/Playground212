import React from "react";
import "../styles/miniMenu.css";

interface NavBarProps {
  onPageChange: (newPage: string) => void;
}

const MiniMenu: React.FC<NavBarProps> = ({ onPageChange }) => {
  const handlePageChoice = (newPage: string) => {
    onPageChange(newPage);
  };
  return (
    <>
      <div className="small-menu-options">
        <div className="small-item">
          <a href="/home">Home</a>
        </div>
        <div className="small-item">
          <a href="">About</a>
        </div>
        <div className="small-item">
          <a href="">Automotive</a>
        </div>
        <div className="small-item">
          <a href="">Peronal</a>
        </div>
        <div className="small-item">
          <a href="/order">Shoot</a>
        </div>
        <div className="small-item">
          <a
            onClick={() => {
              handlePageChoice("login");
            }}
          >
            Login
          </a>
        </div>
        <div className="small-item">
          <a
            onClick={() => {
              handlePageChoice("register");
            }}
          >
            Register
          </a>
        </div>
        <div className="small-item">
          <a href="">Upload</a>
        </div>
      </div>
    </>
  );
};

export default MiniMenu;
