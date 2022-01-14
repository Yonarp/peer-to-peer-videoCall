import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketContext";
import Modal from "./Modal";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div>
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
        <div className="modal">
          <button
            onClick={() => {
             // callUser(idToCall);
              setIsOpen(true);
            }}
          >
            Call
          </button>
          <Modal isOpen={isOpen} closeModal = { () => { setIsOpen(false);} }/>
        </div>
      )}

      {children}
    </div>
  );
};

export default Options;
