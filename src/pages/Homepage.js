import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Homepage;
