import React from "react";
import "./Features.css";
import circle from "../../circle.png";
import loc from "../../loc.png";
import repeat from "../../repeat.png";
import vidRepo from "../../vidRepo.png";

const Features = () => {
  return (
    <div className="features-parent">
      <div className="title-pack">
        <h2 className="features-heading">Features</h2>
        <p className="sub-text">Key Highlights of Our Extension</p>
      </div>
      <section className="features-container">
        <div className="left-features-side">
          <div className="box">
            <img src={circle} alt="" />
            <div className="feature-brief">
              <h4 className="heading">Simple Screen Recording</h4>
              <p className="feature-brief">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={circle} alt="" />
            <div className="feature-brief">
              <h4 className="heading">Easy-to-Share URL</h4>
              <p className="feature-brief">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={circle} alt="" />
            <div className="feature-brief">
              <h4 className="heading">Revisit Recordings</h4>
              <p className="feature-brief">
              Access and review your past content effortlessly. Your recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="right-features-side">
          <img src={vidRepo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Features;
