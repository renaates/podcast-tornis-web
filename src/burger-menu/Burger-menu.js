import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Burger-menu.css";

export const BurgerMenu = () => {
  return (
    <div id="outer-container">
      {" "}
      <Menu right outerContainerId={"outer-container"}>
        <a className="menu-item" href="#new">
          Sākums
        </a>
        <a className="menu-item" href="#jaunumi">
          Jaunumi
        </a>
        <a className="menu-item" href="#epizodes">
          Epizodes
        </a>
        <a className="menu-item" href="#par">
          Par projektu
        </a>
        <a className="menu-item" href="#bazars">
          Bazars
        </a>
      </Menu>
    </div>
  );
};
