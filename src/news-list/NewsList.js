import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DateTime } from "luxon";

import { News } from "../news/News";
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

const NewsList = ({ news }) => (
  <Carousel
    containerClass="news-container"
    responsive={responsive}
    removeArrowOnDeviceType={["mobile"]}
  >
    {news.map((article, index) => (
      <News {...article} key={index}></News>
    ))}
  </Carousel>
);

export const NewsListWithData = () => {
  const episodesCollection = useFirestore().collection("news");
  const { status, data } = useFirestoreCollectionData(episodesCollection);

  //'loading' | 'error' | 'success'

  if (status === "error") {
    return "Notika kļūme";
  }

  if (status === "loading") {
    return "Ielādējam datus, uzgaidi";
  }

  return (
    <NewsList
      news={data.map((article) => ({
        ...article,
        date: DateTime.fromJSDate(article.date.toDate()).toLocaleString({
          locale: "lv-LV",
        }),
      }))}
    />
  );
};
