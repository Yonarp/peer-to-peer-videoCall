import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
      
    <div>
        {console.log(call , callAccepted)}

      {call.isReceivedCall && !callAccepted && (
          `${console.log("works")}`,
        <div>
          <h1>{call.name} is calling </h1>

          <button onClick={() => answerCall()}>Answer</button>
        </div>
      ) }
    </div>
  );
};

export default Notifications;
