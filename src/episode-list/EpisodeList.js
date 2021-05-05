import React from "react";
import { Episode } from "../episode/Episode";
import TinySlider from "tiny-slider-react";
import "./EpisodeList.css";

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
};

export const EpisodeList = ({ episodes }) => (
  <div className="episode-container">
    <TinySlider settings={settings}>
      {episodes.map((episode, index) => (
        <Episode {...episode} key={index}></Episode>
      ))}
    </TinySlider>
  </div>
);
