import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Episode } from "../episode/Episode";
import "./EpisodeList.css";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1600, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

export const EpisodeList = ({ episodes }) => (
  <Carousel
    responsive={responsive}
    infinite={true}
    containerClass="episode-container"
    // showDots={true}
    // renderDotsOutside={true}
    removeArrowOnDeviceType={["mobile"]}
  >
    {episodes.map((episode, index) => (
      <Episode {...episode} key={index}></Episode>
    ))}
  </Carousel>
);
