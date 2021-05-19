import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#jaunumi">JAUNUMI</a>
        <a href="#epizodes">EPIZODES</a>
        <a href="#new" className="logo">
          <img src="images/logoRound.png" className="logo" />
        </a>
        <a href="#par">PAR PROJEKTU</a>
        <a href="#bazars">BAZARS</a>
      </div>
    </header>
  );
};
