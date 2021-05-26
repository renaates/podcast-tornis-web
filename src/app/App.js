import { StrictMode } from "react";

import { SectionList } from "../section-list/SectionList";
import { Header } from "../header/Header";
import { Bazars } from "../bazars/Bazars";
import { Rules } from "../rules/Rules";
import { Footer } from "../footer/Footer";
import { FirebaseProvider } from "../FirebaseProvider";

import "./App.css";

export const App = () => {
  return (
    <StrictMode>
      <FirebaseProvider>
        <Header></Header>
        <SectionList></SectionList>
        <Rules></Rules>
        <Bazars></Bazars>
        <Footer></Footer>
      </FirebaseProvider>
    </StrictMode>
  );
};
