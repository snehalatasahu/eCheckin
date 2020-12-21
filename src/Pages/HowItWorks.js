import React, { Fragment } from "react";

import Header from "../Components/Home/Header";
import ServicesSection from "../Components/Home/ServicesSection";
import StrategySection from "../Components/Home/StrategySection";
import NavBar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import Contact from "../Components/Home/Contact";
import Carasoul from "../Components/Home/Carasoul";
import Cards from "../Components/Home/Cards";
import SecNavbar from "../Components/HowItWorks/SecNavbar";

const HowItWorks = () => {
  return (
    <Fragment>
      <SecNavbar />
      <Header />
      <StrategySection />
      <ServicesSection />
      <Carasoul />
      <Cards />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HowItWorks;
