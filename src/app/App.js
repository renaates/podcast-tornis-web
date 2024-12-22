import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { SectionList } from "../section-list/SectionList";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { BurgerMenu } from "../burger-menu/Burger-menu";
import { FirebaseProvider } from "../FirebaseProvider";
import Admin from "../admin/Admin";
import Login from "../admin/Login";

import "./App.css";

const Layout = () => {
  const location = useLocation();
  const isAdminOrLogin = location.pathname === "/login" || location.pathname === "/admin";

  return (
    <>
      {!isAdminOrLogin && <BurgerMenu />}
      {!isAdminOrLogin && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/admin" element={<Admin />} /> {/* Admin route */}
        <Route path="/" element={<SectionList />} /> {/* Default route */}
      </Routes>

      {!isAdminOrLogin && <Footer />}
    </>
  );
};

const App = () => (
  <StrictMode>
    <FirebaseProvider>
      <Router>
        <Layout />
      </Router>
    </FirebaseProvider>
  </StrictMode>
);

export default App;