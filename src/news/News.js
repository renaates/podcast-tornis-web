import React from "react";
import "./News.css";

export const News = ({ date, title, text, image }) => {
  return (
    <div className="news-item">
      <img className="news-image" src={image} />
      <div>
        <p>{date}</p>
        <h4>{title}</h4>
        <p className="news-text">{text}</p>
      </div>
    </div>
  );
};
