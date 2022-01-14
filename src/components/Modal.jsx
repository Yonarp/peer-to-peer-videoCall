import React, {useState, useContext} from 'react'
import { SocketContext } from "../SocketContext";
import {FiPhoneCall} from 'react-icons/fi'
import {MdCancel, MdWifiCalling3} from 'react-icons/md'
import ReactDom from 'react-dom';
import gif from '../lottie/video.gif'
import "./Modal.scss"

function Modal({isOpen, closeModal}) {
    const audio = new Audio(require("../sound/click2.wav"));
    const [idToCall, setIdToCall] = useState("");
    const {callUser} = useContext(SocketContext);
    if(!isOpen) return null;
    return ReactDom.createPortal(
        <div className="modal-content">
            <div className="modal-content-header">
           <h1>Enter ID </h1>
           <button className="modal-content-close-button" onClick={() => {audio.play(); closeModal()}}><MdCancel/></button>
           </div>
           <img src={gif} alt=""/>
           <p>Enter the unique ID of the person you wish to connect to and start a call with.</p>
           <input
        placeholder="enter id to call"
        value={idToCall}
        onChange={(e) => {
          setIdToCall(e.target.value);
        }}
        
      ></input>
        <button
        className="modal-content-call-button"
            onClick={() => {
                audio.play();
              callUser(idToCall);
              closeModal();
            }}
          >
            <MdWifiCalling3 className="modal-content-call-button-icon"/>
            
          </button>
          
        </div>,
        document.getElementById("modal")
    )
}

export default Modal
