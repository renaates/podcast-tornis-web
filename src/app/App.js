import { StrictMode } from "react";

import { SectionList } from "../section-list/SectionList";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { BurgerMenu } from "../burger-menu/Burger-menu";
import { FirebaseProvider } from "../FirebaseProvider";

import "./App.css";

export const App = () => {
  return (
    <StrictMode>
      <FirebaseProvider>
        <BurgerMenu></BurgerMenu>
        <Header></Header>
        <SectionList></SectionList>
        <Footer></Footer>
      </FirebaseProvider>
    </StrictMode>
  );
};
