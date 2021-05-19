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
    <div className="episode-item">
      <img className="rubric-image" src={image} />
      <p className="number">{number}</p>
      <h3>{title}</h3>
      <div className="episode-description">{description}</div>
      <div className="details-button">VAIRĀK</div>
    </div>
  );
};
