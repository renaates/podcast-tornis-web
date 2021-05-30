import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import "./NewestEpisode.css";

const NewestEpisode = ({ spotify }) => {

  return (
    <a href={spotify} target="blank">
        <button className="landing-button">JAUNĀKĀ EPIZODE</button>
    </a>
  );
};

export const NewestEpisodeWithData = () => {
    const newestEpisodeFromCollection = useFirestore().collection("episodes").orderBy("number", "desc").limit(1);
    const { status, data } = useFirestoreCollectionData(newestEpisodeFromCollection);
  
    if (status === "error") {
      return "Notika kļūda";
    }
  
    if (status === "loading") {
      return "Ielādējam datus, uzgaidi";
    }

    console.log(newestEpisodeFromCollection);
    return <NewestEpisode spotify={data.map((spotifyy) => ({ ...spotifyy }))}/>
  };
  