import React from "react";
import "./Section.css";

export const Section = ({ name, description, children }) => {
  return (
    <section className="container">
      <div className="section-title">
        <h1>
          <span className="line">| </span>
          {name}
        </h1>
      </div>
      <div className="section-description">
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </section>
  );
};
