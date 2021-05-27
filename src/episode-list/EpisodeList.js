import React from "react";
import Carousel from "react-multi-carousel";
// import { useFirestore, useFirestoreCollectionData } from "reactfire";

import "react-multi-carousel/lib/styles.css";
import { Episode } from "../episode/Episode";
import "./EpisodeList.css";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

export const EpisodeList = ({ episodes }) => {
  // const episodesCollection = useFirestore().collection("episodes");

  // const { status, data } = useFirestoreCollectionData(episodesCollection);

  return (
    <>
      {/* <div>
        <span>{status}</span>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div> */}
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="episode-container"
        removeArrowOnDeviceType={["mobile"]}
      >
        {episodes.map((episode, index) => (
          <Episode {...episode} key={index}></Episode>
        ))}
      </Carousel>
    </>
  );
};
