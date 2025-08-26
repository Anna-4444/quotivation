import React from "react";
import { useState, useEffect } from "react"

const Message = ({messageText, removeMessage}) => {
    
    useEffect(() => {
        const messageDisapear = setTimeout(() => {
            removeMessage(); 
        }, 1500);
        return () => clearTimeout(messageDisapear);
    }, [])

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
        </div>
    )
}

export default Message;