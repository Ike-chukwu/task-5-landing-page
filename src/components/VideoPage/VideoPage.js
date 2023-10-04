import React from "react";
import "./VideoPage.css";
import VideoIsReadyHero from "../VideoIsReadyHero/VideoIsReadyHero";
import Recommended from "../Recommended/Recommended";
import Footer from "../Footer/Footer";

const VideoPage = () => {
  return (
    <div>
      <VideoIsReadyHero />
      <Recommended />
      <Footer />
    </div>
  );
};

export default VideoPage;
