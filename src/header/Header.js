import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="header-wave" src="../images/header.svg" />
        <div className="header-content">
          <a href="#new">SĀKUMS</a>
          <a href="#jaunumi">JAUNUMI</a>
          <a href="#epizodes">EPIZODES</a>
          <a href="#par">PAR PROJEKTU</a>
          <a href="#bazars">BAZARS</a>
        </div>
      </header>
    </div>
  );
};
