import React from "react";
import Carousel from "react-multi-carousel";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import "react-multi-carousel/lib/styles.css";
import { Episode } from "../episode/Episode";
import Loader from "react-loader-spinner";
import "./EpisodeList.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export const EpisodeList = ({ episodes }) => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="episode-container"
        // removeArrowOnDeviceType={["mobile"]}
      >
        {episodes.map((episode, index) => (
          <Episode {...episode} key={index}></Episode>
        ))}
      </Carousel>
    </>
  );
};

export const EpisodeListWithData = () => {
  const episodeCollection = useFirestore()
    .collection("episodes")
    .orderBy("number", "desc");
  const { status, data } = useFirestoreCollectionData(episodeCollection);

  if (status === "error") {
    return "Notika kļūme";
  }

  if (status === "loading") {
    return (
      <Loader
        type="TailSpin"
        color="#e88073"
        height={500}
        width={100}
        timeout={3000}
      />
    );
  }

  return <EpisodeList episodes={data.map((episode) => ({ ...episode }))} />;
};
