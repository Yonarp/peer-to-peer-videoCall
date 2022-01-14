import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./notifications.scss"

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
      
    <div>
        {console.log(call , callAccepted)}

      {call.isReceivedCall && !callAccepted && (
          `${console.log("works")}`,
        <div className="call-modal">
          <h1>{call.name} is calling </h1>

          <button onClick={() => answerCall()}>Answer</button>
        </div>
      ) }
    </div>
  );
};

export default Notifications;
