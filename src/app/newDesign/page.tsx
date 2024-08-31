import React from "react";

// components
import HeaderTop from "../Head";
import MainHeader from "../mainHeader";
import Navbar from "../Navbar";
import Hero from "../Hero";
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
