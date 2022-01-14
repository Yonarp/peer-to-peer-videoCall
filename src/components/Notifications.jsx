import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import gif from "../lottie/call.gif"
import "./notifications.scss"

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const audio = new Audio(require("../sound/notif.mp3"));
  return (
      
    <div>
        {console.log(call , callAccepted)}

      {call.isReceivedCall && !callAccepted && (
          `${audio.play()}`,
        
        <div className="call-modal">
          <img src={gif} alt=""/>
          <h1> You are getting a call from :</h1>
          
          <h2>{call.name}</h2>
    

          <button onClick={() => answerCall()}>Answer</button>
        </div>
      ) }
    </div>
  );
};

export default Notifications;
