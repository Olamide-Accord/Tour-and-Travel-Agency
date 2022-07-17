import React from 'react';
import { useGlobalContext } from '../../context';
import "./messages.css"

const Messages = () => {
  const {message} = useGlobalContext()
  return (
    <div className="messages">
      <h6>{message}</h6> 
    </div>
  )
}

export default Messages