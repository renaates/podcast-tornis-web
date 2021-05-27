import React from "react";
import "./News.css";

export const News = ({ date, title, text, image }) => {
  return (
    <article className="news-item">
      <img className="news-image" src={image} alt={title}/>
      <div className="news-info-container">
        <div>
          <time className="news-date">{date}</time>
          <h3 className="news-title">{title}</h3>
        </div>
        <div className="news-text-container">
          <p className="news-text">{text}</p>
        </div>
      </div>
    </article>
  );
};
