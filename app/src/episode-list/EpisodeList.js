import React from 'react';
import TinySlider from "tiny-slider-react";

const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
};

export const EpisodeList = ({episodes}) => (
    <TinySlider settings={settings}>
    {imgs.map((el, index) => (
      <div key={index} style={{ position: "relative" }}>
        <img
          className={`tns-lazy-img`}
          src={loadingImage}
          data-src={el}
          alt=""
          style={imgStyles}
        />
      </div>
    ))}
    </TinySlider>
)