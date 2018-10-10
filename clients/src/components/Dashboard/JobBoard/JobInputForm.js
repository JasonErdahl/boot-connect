import React from "react";
import './Jobboard.css';


const Jobinputform = props => (
  <div className="jobInputForm">
     <input className="job-info-input" type="text" placeholder="Job Title" ></input>
     <input className="job-info-input" type="text" placeholder="Company"></input>
     <br></br>
     <input className="job-info-input" type="text" placeholder="Location"></input>
     <input className="job-info-input" type="url" placeholder="Job link"></input>
     <br></br>
     <input className="job-info-input" type="text" placeholder="Additonal notes"></input>
     <button id="jobPostBtn">Post</button>
  </div>
);

export default Jobinputform;