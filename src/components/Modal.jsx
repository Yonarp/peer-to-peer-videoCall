import React from 'react'
import "./Modal.scss"

function Modal({isOpen, closeModal}) {
    if(!isOpen) return null;
    return (
        <div className="modal-content">
           <h1>HEllo</h1>
           <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default Modal
