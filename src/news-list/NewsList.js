import React from "react";
import { News } from "../news/News";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewsList.css";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1600, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

export const NewsList = ({ news }) => (
  <Carousel containerClass="news-container" responsive={responsive}>
    {news.map((article, index) => (
      <News {...article} key={index}></News>
    ))}
  </Carousel>
);
