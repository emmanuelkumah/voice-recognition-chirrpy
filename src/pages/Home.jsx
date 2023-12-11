import React from "react";
import Navigation from "../components/Navbar/Navigation";
import Hero from "../components/Hero/Hero";

import Reasons from "../components/Reasons/Reasons";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Reasons />
    <HowItWorks />
    </>
  );
};

export default Home;
