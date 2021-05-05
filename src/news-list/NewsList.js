import React from "react";
import { News } from "../news/News";
import TinySlider from "tiny-slider-react";
import "./NewsList.css";

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
};

export const NewsList = ({ news }) => (
  <div className="news-container">
    <TinySlider settings={settings}>
      {news.map((article, index) => (
        <News {...article} key={index}></News>
      ))}
    </TinySlider>
  </div>
);
