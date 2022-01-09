import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div>
      <input
        label="enter Your name here"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <h2>{me}</h2>
      <h2>Make a call</h2>
      <input
        placeholder="enter id to call"
        value={idToCall}
        onChange={(e) => {
          setIdToCall(e.target.value);
        }}
      ></input>
      {callAccepted && !callEnded ? (
        <button
          onClick={() => {
            leaveCall();
          }}
        >
          Leave Call
        </button>
      ) : (
        <button
          onClick={() => {
            callUser(idToCall);
          }}
        >
          Call
        </button>
      )}

      {children}
    </div>
  );
};

export default Options;
