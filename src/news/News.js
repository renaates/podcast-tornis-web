import React from "react";
import "./News.css";

export const News = ({ date, title, text, image }) => {
  return (
    <div className="news-item">
      <img className="news-image" src={image} />
      <div>
        <div>
          <p className="news-date">{date}</p>
          <p className="news-title">{title}</p>
        </div>
        <div className="news-text-container">
          <p className="news-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
