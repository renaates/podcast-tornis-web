import React from "react";
import "./Landing.css";

export const Landing = ({ spotify, youtube }) => {
  return (
    <div>
      <div className="landing-container">
        <div className="landing-title">
          <p>PODKĀSTS</p>
          <p>TORNIS</p>
        </div>
        <form action={spotify}>
          <button className="landing-button">JAUNĀKĀ EPIZODE</button>
        </form>
      </div>
      <div className="wrap">
        <img src="../images/wave.svg" className="wave" />
      </div>
    </div>
  );
};
