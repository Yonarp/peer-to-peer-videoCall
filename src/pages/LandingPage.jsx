import React from "react";
import "./LandingPage.scss";
import lottie from "lottie-web";
import animationData from "../lottie/videoAnimation2.json";

function LandingPage() {
  React.useEffect(() =>{
    lottie.loadAnimation({
      container: document.querySelector(".animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  })

  return (
    <div className="landing">
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
        <button  className="landing-page-button">Hello</button>
      </div>
      <div className="animation"></div>
    </div>
  );
}

export default LandingPage;
