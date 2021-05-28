import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Person } from "../person/Person";
import "./PersonList.css";

const PersonList = ({ team }) => (
  <div className="person-container">
    {team.map((person, index) => (
      <Person {...person} key={index}></Person>
    ))}
  </div>
);

export const PersonListWithData = () => {
  const teamCollection = useFirestore().collection("team").orderBy("number");
  const { status, data } = useFirestoreCollectionData(teamCollection);

  if (status === "error") {
    return "Notika kļūme";
  }

  if (status === "loading") {
    return "Ielādējam datus, uzgaidi";
  }

  return <PersonList team={data.map((person) => ({ ...person }))} />;
};
