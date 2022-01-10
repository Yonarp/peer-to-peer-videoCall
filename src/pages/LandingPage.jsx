import React, {useState} from "react";
import "./LandingPage.scss";
import gif from "../lottie/landing.gif";
import {AiOutlineGithub, AiOutlineCodepen, AiOutlineMail} from 'react-icons/ai'

function LandingPage() {
  const [userName, setUserName] = useState(""); 
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
    console.log(userName);
    const audio = new Audio(require("../sound/click2.wav"));
    audio.play();
   
  };

  const inputEvent = (e) => {
    setUserName(e.target.value);
  }



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
            <input type="text" className="landing-page-input" required  onChange={(e) => inputEvent(e)} ></input>
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
        <div className="animation">
          <img src={gif} alt="gif" />
        </div>
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
