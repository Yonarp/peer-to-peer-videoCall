import React from "react";
import "./LandingPage.scss";
import lottie from "lottie-web";
import animationData from "../lottie/videoAnimation3.json";
import {AiOutlineGithub, AiOutlineCodepen, AiOutlineMail} from 'react-icons/ai'

function LandingPage() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  });
  const change = () => {
    document
      .getElementById("anim")
      .classList.remove("landing-page-button-arrow");
    document
      .getElementById("anim")
      .classList.add("landing-page-button-arrow-2");
  };

  const changeAgain = () => {
    document
      .getElementById("anim")
      .classList.remove("landing-page-button-arrow-2");
    document.getElementById("anim").classList.add("landing-page-button-arrow");
  };

  const clickSound = () => {
    console.log("click");
    const audio = new Audio(require("../sound/click2.wav"));
    audio.play();
  };

  return (
    <div className="main">
      <div className="landing">
        <div className="landing-page">
          <div className="landing-page-heading">
            Get started with your calls
          </div>
          <div className="landing-page-para">
            Our calls are peer to peer and smoother than average video calls
            that you do at home.
          </div>
          <div className="landing-page-text">
            <input type="text" className="landing-page-input" required></input>
            <span className="landing-page-placeholder"> Enter Name</span>
          </div>
          <button
            className="landing-page-button"
            onMouseEnter={() => {
              change();
            }}
            onMouseLeave={() => {
              changeAgain();
            }}
            onClick={() => {
              clickSound();
            }}
          >
            Next{" "}
            <span className="landing-page-button-arrow" id="anim">
              &nbsp; &rarr;{" "}
            </span>
          </button>
        </div>
        <div className="animation"></div>
      </div>
      <div className="footer">
         <p className="footer-name">Made by Pranoy Sarkar</p>
         <div className="footer-icons">
         <AiOutlineGithub className ="footer-icon footer-github"/>
         <AiOutlineCodepen className="footer-icon footer-codepen"></AiOutlineCodepen>
         <AiOutlineMail className="footer-icon footer-mail"/>
         </div>
      </div>
    </div>
  );
}



export default LandingPage;
