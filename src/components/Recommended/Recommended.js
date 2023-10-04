import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <div className="recommended-parent">
      <section className="recommended-container">
        <p className="title-header">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <div className="purple-btn">save video</div>
        <span className="account-prompt">
          Don’t have an account? <em className="link-prompt">Create account</em>
        </span>
      </section>
    </div>
  );
};

export default Recommended;
