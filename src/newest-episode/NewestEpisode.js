import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Loader from "react-loader-spinner";
import "./NewestEpisode.css";

const NewestEpisode = ({ spotify }) => {
  return (
    <a href={spotify} target="blank">
      <button className="landing-button">JAUNĀKĀ EPIZODE</button>
    </a>
  );
};

export const NewestEpisodeWithData = () => {
  const newestEpisodeFromCollection = useFirestore()
    .collection("episodes")
    .orderBy("number", "desc")
    .limit(1);
  const { status, data } = useFirestoreCollectionData(
    newestEpisodeFromCollection
  );

  if (status === "error") {
    return "Notika kļūda";
  }

  if (status === "loading") {
    return (
      <Loader
        type="Audio"
        color="#fff7f5"
        height={70}
        width={300}
        timeout={3000}
      />
    );
  }
  return <NewestEpisode spotify={data[0].spotify} />;
};
