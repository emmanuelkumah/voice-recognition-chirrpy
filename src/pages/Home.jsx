import React from "react";
import Navigation from "../components/Navbar/Navigation";
import Hero from "../components/Hero/Hero";

import Reasons from "../components/Reasons/Reasons";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import UseCases from "../components/UseCases/UseCases";
import Features from "../components/Features/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Reasons />
      <HowItWorks />

      {/* <Hero />
      <Reasons />
      <HowItWorks />
      <UseCases />
      <Features />
      <Footer /> */}
    </>
  );
};

export default Home;
