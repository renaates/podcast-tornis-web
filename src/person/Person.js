import React from "react";
import "./Person.css";

export const Person = ({ imageSrc, personName, personRole }) => {
  return (
    <div className="person-item">
      <img className="person-image" src={imageSrc} />
      <div className="person-description">
        <h4>{personName}</h4>
        <p>{personRole}</p>
      </div>
    </div>
  );
};
