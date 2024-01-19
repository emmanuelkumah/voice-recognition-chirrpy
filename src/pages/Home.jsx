import React from "react";
import Navigation from "../components/HomeScreen/Navbar/Navigation";
import Hero from "../components/HomeScreen/Hero/Hero";
import Reasons from "../components/HomeScreen/Reasons/Reasons";
import HowItWorks from "../components/HomeScreen/HowItWorks/HowItWorks";
import UseCases from "../components/HomeScreen/UseCases/UseCases";
import Features from "../components/HomeScreen/Features/Features";
import Footer from "../components/HomeScreen/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Reasons />
      <HowItWorks />
      <UseCases />
      <Features />
      <Footer />

     
    </>
  );
};

export default Home;
