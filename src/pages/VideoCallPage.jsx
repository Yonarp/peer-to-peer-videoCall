import React, {useContext} from 'react'
import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";
import { LandingPageContext } from "./LandingPage";
import './VideoCallPage.css'

function VideoCallPage() {
  const userName = localStorage.getItem('userName');
    return (
        <div className = "container">
            <h1>{userName}</h1>
            <div className="header">Video Chat trial</div>
            <div className="wrapper">
          <VideoPlayer className="video-player"/>
          <Options className="options">
            <Notifications className = "notifications" />
          </Options>
          </div>
        </div>
      );
}

export default VideoCallPage
