import React from 'react'
import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";
import './VideoCallPage.css'

function VideoCallPage() {
    return (
        <div className = "container">
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
