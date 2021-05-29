import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="header-wave" src="../images/header.svg" alt="wave" />
        <div className="header-content">
          <a href="#new" className="header-item">
            Sākums
          </a>
          <a href="#jaunumi" className="header-item">
            Jaunumi
          </a>
          <a href="#epizodes" className="header-item">
            Epizodes
          </a>
          <a href="#par" className="header-item">
            Par projektu
          </a>
          <a href="#bazars" className="header-item">
            Bazars
          </a>
        </div>
      </header>
    </div>
  );
};
