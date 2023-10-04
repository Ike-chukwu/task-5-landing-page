import React from "react";
import "./Navbar.css";
import fullLogo from "../../fullLogo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={fullLogo} className="logo" alt="" />
      <div className="middle-content">
        <span className="page">features</span>
        <span className="page">how it works</span>
      </div>
      <span className="page">get started</span>
    </nav>
  );
};

export default Navbar;
