import React from "react";
import { Episode } from "../episode/Episode";
import Slider from "react-slick";
import "./EpisodeList.css";

export const settings = {
  className: "slider",
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 1601,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export const EpisodeList = ({ episodes }) => (
  <div className="episode-container">
    <Slider {...settings}>
      {episodes.map((episode, index) => (
        <Episode {...episode} key={index}></Episode>
      ))}
    </Slider>
  </div>
);
