import React from "react";
import { Person } from "../person/Person";
import "./PersonList.css";

export const PersonList = ({ team }) => (
  <div className="person-container">
    {team.map((person, index) => (
      <Person {...person} key={index}></Person>
    ))}
  </div>
);
