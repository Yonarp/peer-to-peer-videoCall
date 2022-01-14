import React, { useContext } from "react";
import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";
import { SocketContext } from "../SocketContext";
import "./VideoCallPage.scss";
import { BsFillPersonFill } from "react-icons/bs";

function VideoCallPage() {
  const { name, setName, me } = useContext(SocketContext);
  setName(localStorage.getItem("userName"));
  return (
    <div className="container">
      <div className="details">
        <div className="name">
          <p className = "logo"><BsFillPersonFill/> : </p>
          <p className = "detail">
            {" "}
              {name}
          </p>
          </div>
          <div className="id">
            <p className = "logo">I D :</p>
            <p className = "detail">   {me}</p>
          </div>
      </div>
      <div className="wrapper">
        <VideoPlayer className="video-player" />
        <Options className="options">
          <Notifications className="notifications" />
        </Options>
      </div>
    </div>
  );
}

export default VideoCallPage;
