import React from "react";
import "./NewestEpisode.css";

export const NewestEpisode = ({ description, embed, youtube }) => {
  return (
    <div>
      <div>
        <iframe
          className="newest-episode"
          src={embed}
          allowtransparency="true"
          scrolling="no"
          allow="encrypted-media"
        ></iframe>
      </div>
      <p>{description}</p>
    </div>
  );
};
