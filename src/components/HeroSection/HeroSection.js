import React from "react";
import "./HeroSection.css";
import hero from "../../hero-img.png";

const HeroSection = () => {
  return (
    <div className="hero-parent">
      <section className="hero-container">
        <div className="left-hand">
          <h1 className="heading">
            Show Them <br />
            Don’t Just Tell
          </h1>
          <p className="text">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="purple-btn">install helpmeout</button>
        </div>
        <div className="image-container">
          <img src={hero} alt="" />
        </div>
      </section>
      <div className="blue-div"></div>
    </div>
  );
};

export default HeroSection;
