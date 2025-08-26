import React from "react";
import { useEffect } from "react"

const Message = ({messageText, removeMessage}) => {
    
    useEffect(() => {
        const messageDisapear = setTimeout(() => {
            removeMessage(); 
        }, 1500);
        return () => clearTimeout(messageDisapear);
    }, [removeMessage])

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
        </div>
    )
}

export default Message;