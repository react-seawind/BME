import React from "react";
import RouterMain from "../../Router/Router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RouterMain />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
