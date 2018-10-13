import React from "react";
import './Messageboard.css';


const Messageinputform = props => (
  <div className="messageInputForm">
     <input className="message-input-info" type="text" placeholder="Drop a message"></input>
     <button id="msgPostBtn">Post</button>
  </div>
);

export default Messageinputform;