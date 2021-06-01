import React from "react";
import { NewestEpisodeWithData } from "../newest-episode/NewestEpisode";
import "./Landing.css";

export const Landing = () => {
  return (
    <div>
      <div className="landing-container">
        {/*
        <div className="warning">
          <span>LAPA VĒL ATRODAS IZSTRĀDES STADIJĀ</span>
        </div> */}
        <div className="landing-title">
          <p>PODKĀSTS</p>
          <p>TORNIS</p>
        </div>
        <NewestEpisodeWithData />
      </div>
      <div className="wrap">
        <img src="../images/wave.svg" className="wave" alt="wave" />
      </div>
    </div>
  );
};
