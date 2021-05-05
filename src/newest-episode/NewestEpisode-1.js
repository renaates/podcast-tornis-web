import React from "react";
import { NewestEpisode } from "../newest-episode/NewestEpisode";
import "./NewestEpisode.css";

export const NewestEpisodeList = ({ newest }) => (
  <div className="newest-episode-container">
    {newest.map((episode, index) => (
      <NewestEpisode {...episode} key={index}></NewestEpisode>
    ))}
  </div>
);
