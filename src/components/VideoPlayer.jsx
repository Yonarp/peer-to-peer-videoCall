import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import './video.scss'

const VideoPlayer = () => {
    const {stream,myVideo,userVideo,callEnded,call,callAccepted,name} = useContext(SocketContext);
    return (
        <div>
        {
             stream && (
                <div className="video-container">
                    <h1>You</h1>
                <video muted autoPlay playsInline id="my-video" ref={myVideo} className="video" />
                </div>
            ) }

            {
                !callEnded && callAccepted && (
                    <div className="video-container">
                        <h1>{call.name}</h1>
                    <video autoPlay playsInline id="user-video" ref={userVideo} className="video"/>
                    </div>
                )
            }
            
        </div>
        
    )
}

export default VideoPlayer
