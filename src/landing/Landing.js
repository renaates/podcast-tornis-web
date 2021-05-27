import React from "react";
import "./Landing.css";

export const Landing = ({ spotify }) => {
  return (
    <div>
      <div className="landing-container">
        <div className="landing-title">
          <p>PODKĀSTS</p>
          <p>TORNIS</p>
        </div>
        <a href={spotify} target="blank">
          <button className="landing-button">JAUNĀKĀ EPIZODE</button>
        </a>
      </div>
      <div className="wrap">
        <img src="../images/wave.svg" className="wave" alt="wave" />
      </div>
    </div>
  );
};
