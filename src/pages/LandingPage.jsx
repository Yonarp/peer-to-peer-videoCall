import React from "react";
import "./LandingPage.scss";
import TextField from "@material-ui/core/TextField";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-heading">Get started with your calls</div>
      <div className="landing-page-para">
        Our calls are peer to peer and smoother than average video calls that
        you do at home.
      </div>
      <div className="landing-page-text">
        <input type="text" className="landing-page-input" required></input>
        <span className="landing-page-placeholder"> Enter Name</span>
      </div>
    </div>
  );
}

export default LandingPage;
