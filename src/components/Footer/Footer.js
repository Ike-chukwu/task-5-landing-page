import React from "react";
import "./Footer.css";
import fullLogo from "../../logo-2.png";

const Footer = () => {
  return (
    <div className="footer-parent">
      <section className= "footer-container">
        <img src={fullLogo} alt="" className="logo" />

        <div className="aspect">
          <span className="link first-title">menu</span>
          <span className=" link">home</span>
          <span className=" link">converter</span>
          <span className=" link">how it works</span>
        </div>

        <div className="aspect">
          <span className="link first-title">about us</span>
          <span className=" link">about</span>
          <span className=" link">contact us</span>
          <span className=" link">privacy policy</span>
        </div>

        <div className="aspect">
          <span className="link first-title">screen record</span>
          <span className=" link">browser window</span>
          <span className=" link">desktop</span>
          <span className=" link">application</span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
