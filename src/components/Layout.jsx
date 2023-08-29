import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section id="layout" className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
