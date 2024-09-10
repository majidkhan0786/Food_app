import React from "react";

// components
import HeaderTop from "../_components/NewHome/Head";
import MainHeader from "../_components/NewHome/mainHeader";
import Navbar from "../_components/NewHome/Navbar";
import Hero from "../_components/NewHome/Hero";
import NewProducts from "../_components/NewHome/NewProducts";

const NewHomePage = () => {
  return (
    <>
      <HeaderTop />
      <MainHeader />
      <Navbar />
      <Hero />
      <NewProducts />
    </>
  );
};

export default NewHomePage;
