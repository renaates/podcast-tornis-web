import React, { useState } from "react";
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
  const [isExpanded, setExpanded] = useState(true);
  const toggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="episode-item">
      <div>
        {isExpanded ? (
          <div>
            <img className="rubric-image rubric-image-animation" src={image} />
            <p className="number">{number}</p>
          </div>
        ) : (
          <p className="number contracted-number">{number}</p>
        )}
      </div>
      <div className="title-container">
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
          <button className="details-button not-contracted" onClick={toggle}>
            VAIRĀK
          </button>
        ) : (
          <button className="details-button contracted" onClick={toggle}>
            MAZĀK
          </button>
        )}

        <div className="social-media-container">
          <a href={spotify} target="#">
            <img
              src="../images/social-media/spotify.svg"
              className="social-media spotify"
            />
          </a>
          <a href={youtube} target="#">
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
