import React from "react";
import { News } from "../news/News";
import Slider from "react-slick";
import "./NewsList.css";

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const NewsList = ({ news }) => (
  <div className="news-container">
    <Slider {...settings} className="slider">
      {news.map((article, index) => (
        <News {...article} key={index}></News>
      ))}
    </Slider>
  </div>
);
