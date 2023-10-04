import React from "react";
import "./VideoIsReadyHero.css";
import { Edit, Whatsapp } from "iconsax-react";
import { Copy } from "iconsax-react";
import { Play } from "iconsax-react";
import { Volume } from "iconsax-react";
import { Setting2 } from "iconsax-react";
import fb from "../../../src/fb.png";
import telegram from "../../../src/telegram.png";
import app from "../../../src/whatsapp.png";
import transcript from "../../../src/transcript.png";

const VideoIsReadyHero = () => {
  return (
    <div className="video-hero-parent">
      <section className="video-hero-container">
        <div className="left-side">
          <h2 className="title">Your video is ready!</h2>

          <div className="video-details">
            <span className="label">name</span>
            <div className="vid-name-pack">
              <span className="vid-name">Untitled_Video_20232509 </span>
              <Edit />
            </div>
          </div>

          <div className="email-details">
            <input
              type="text"
              placeholder="enter email of receiver"
              className="receiver-name"
            />
            <div className="vid-name-pack">send</div>
          </div>

          <div className="email-detail-parent">
            <h2 className="video-title">video url</h2>
            <div className="email-details">
              <input
                type="text"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                className="receiver-name"
              />
              <div className="vid-name-pack">
                <Copy />
                copy
              </div>
            </div>
          </div>

          <div className="last-pack">
            <h2 className="share-title">Share your video </h2>
            <div className="inner-share">
              <div className="share-pack">
                <img src={fb} alt="" />
                <span className="social">facebook</span>
              </div>
              <div className="share-pack">
                <img src={app} alt="" />
                <span className="social">whatsapp</span>
              </div>
              <div className="share-pack">
                <img src={telegram} alt="" />
                <span className="social">telegram</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="first-part">
            <video className="vid" src=""></video>
            <div className="video-detail">
              <div className="time">0:30 / 3:00</div>
              <div className="other-end">
                <div className="icon-pack">
                  <Play />
                  <span className="label">play</span>
                </div>
                <div className="icon-pack">
                  <Volume />
                  <span className="label">volume</span>
                </div>
                <div className="icon-pack">
                  <Setting2 />
                  <span className="label">settings</span>
                </div>
              </div>
            </div>
          </div>
          <img src={transcript} alt="" className="image" />
        </div>
      </section>
    </div>
  );
};

export default VideoIsReadyHero;
