import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import './video.css'

const VideoPlayer = () => {
    const {stream,myVideo,userVideo,callEnded,call,callAccepted} = useContext(SocketContext);
    return (
        <div>
        {
             stream && (
                <video muted autoPlay playsInline id="my-video" ref={myVideo} className="video" />
            ) }

            {
                !callEnded && callAccepted && (
                    <video autoPlay playsInline id="user-video" ref={userVideo} className="video"/>
                )
            }
            
        </div>
        
    )
}

export default VideoPlayer
