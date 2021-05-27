import React, { useState } from "react";
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
  const [isTextChanged, setTextChanged] = useState(false);
  const [isExpanded, setExpanded] = useState(true);
  const toggle = () => {
    setExpanded(!isExpanded);
    setTextChanged(!isTextChanged);
  };

  return (
    <div className="episode-item">
      <div>
        {isExpanded ? (
          <div className="foo">
            <img className="rubric-image" src={image} />
            <p className="number">{number}</p>
          </div>
        ) : undefined}
      </div>
      <div className="rubric-and-title">
        <h3 className="rubric">{rubric}:</h3>
        <h3 className="title">{title}</h3>
      </div>
      {isExpanded ? (
        <div className="episode-description not-contracted">{description}</div>
      ) : (
        <div className="episode-description contracted">
          {description}
          <br></br>
          {/* <a className="extra" href={extra}>
            PIELIKUMI
          </a> */}
        </div>
      )}

      <div className="details-and-social-media">
        {isExpanded ? (
          <button className="details-button" onClick={toggle}>
            {isTextChanged ? "MAZĀK" : "VAIRĀK"}
          </button>
        ) : (
          <button className="details-button contracted" onClick={toggle}>
            {isTextChanged ? "MAZĀK" : "VAIRĀK"}
          </button>
        )}

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
