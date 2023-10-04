import React from "react";
import "./HowItWorks.css";
import record from "../../record.png";

const HowItWorks = () => {
  return (
    <div className="works-parent">
      <h1 className="works-title">How it works</h1>
      <section className="works-container">
        <div className="recording-pack">
          <div className="recording-details">
            <div className="purple-number">1</div>
            <h2 className="detail-heading">Record Screen</h2>
            <p className="briefing-recording">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="recording-details">
            <div className="purple-number">2</div>
            <h2 className="detail-heading">Share Your Recording</h2>
            <p className="briefing-recording">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <div className="recording-details">
            <div className="purple-number">3</div>
            <h2 className="detail-heading">Learn Effortlessly</h2>
            <p className="briefing-recording">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
        </div>
        <div className="pic-pack">
          <div className="pic">
            <img src={record} alt="" />
          </div>
          <div className="pic">
            <img src={record} alt="" />
          </div>
          <div className="pic">
            <img src={record} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
