import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketContext";
import {IoMdCall} from 'react-icons/io';
import {HiPhoneMissedCall} from 'react-icons/hi';
import Modal from "./Modal";

const Options = ({ children }) => {
  const audio = new Audio(require("../sound/click2.wav"));
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser ,call} =
    useContext(SocketContext);
 
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      {callAccepted && !callEnded ? (
        <button
        className="modal-button-leave"
          onClick={() => {
            leaveCall();
          }}
        >
          <HiPhoneMissedCall className="modal-button-leave-icon"/>
        </button>
      ) : (
        <div className="modal">
          <button
          className="modal-button"
            onClick={() => {
             // callUser(idToCall);
            
              audio.play();
              setIsOpen(true);
            }}
          >
            <IoMdCall className = "modal-button-icon"/>
           {/*  &nbsp;
            Make a call */} 
          </button>
          <div className={isOpen ? "overlay" : ""}></div>
          <Modal isOpen={isOpen} closeModal = { () => { setIsOpen(false);} }/>
          <div className={call.isReceivedCall && !callAccepted ? 'overlay' : ''}></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Options;
