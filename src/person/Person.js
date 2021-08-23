import React from "react";
import "./Person.css";

export const Person = ({ image, name, role, active=true}) => {
  return (
    <div className="person-item">
      <img className="person-image" src={image} alt={name} data-status={active}/>
      <div className="person-description" data-status={active}>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};