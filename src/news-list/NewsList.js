import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "react-loader-spinner";
import { DateTime } from "luxon";

import { News } from "../news/News";

export const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1901 },
    items: 1,
  },
  desktopSmall: {
    breakpoint: { max: 1900, min: 1025 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const NewsList = ({ news }) => (
  <Carousel
    containerClass="news-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    responsive={responsive}
  >
    {news.map((article, index) => (
      <News {...article} key={index}></News>
    ))}
  </Carousel>
);

export const NewsListWithData = () => {
  const episodesCollection = useFirestore()
    .collection("news")
    .orderBy("date", "desc");
  const { status, data } = useFirestoreCollectionData(episodesCollection);

  if (status === "error") {
    return "Notika kļūme";
  }

  if (status === "loading") {
    return (
      <Loader
        type="TailSpin"
        color="#e88073"
        height={400}
        width={100}
        timeout={3000}
      />
    );
  }

  return (
    <NewsList
      news={data.map((article) => ({
        ...article,
        date: DateTime.fromJSDate(article.date.toDate()).toLocaleString({
          locale: "fr-BE",
        }),
      }))}
    />
  );
};
