import React from "react";
import "./Person.css";

export const Person = ({ image, name, role }) => {
  return (
    <div className="person-item">
      <img className="person-image" src={image} />
      <div className="person-description">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};
