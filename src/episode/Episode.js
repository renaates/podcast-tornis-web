import React from "react";
import "./Episode.css";

export const Episode = ({
  image,
  number,
  rubric,
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
      <div class="rubric-and-title">
        <h3 className="rubric">{rubric}:</h3>
        <h3 className="title">{title}</h3>
      </div>
      <div className="episode-description">{description}</div>
      <div className="details-and-social-media">
        <div className="details-button">VAIRĀK</div>
        <div className="social-media-container">
          <a href={spotify}>
            <img
              src="../images/social-media/spotify.svg"
              className="social-media spotify"
            />
          </a>
          <a href={youtube}>
            <img
              src="../images/social-media/youtube.svg"
              className="social-media youtube"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
