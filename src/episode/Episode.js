import React from "react";
import "./Episode.css";

export const Episode = ({
  image,
  number,
  title,
  description,
  spotify,
  youtube,
  extra,
}) => {
  return (
    <div className="episode-item item">
      <img className="rubric-image" src={image} />
      <h2>{number}</h2>
      <h4>{title}</h4>
      <div className="episode-description">{description}</div>
      <div className="details-button">DETAĻAS</div>
    </div>
  );
};
