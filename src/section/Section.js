import React from "react";
import "./Section.css";

export const Section = ({ name, description, children, id }) => {
  return (
    <section className="container" id={id}>
      <div className="section-title">
        <h1>
          <span className="line">| </span>
          {name}
        </h1>
      </div>
      {!description || (
        <div className="section-description">
          <p>{description}</p>
        </div>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
};
