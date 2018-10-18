import React from "react";
import './ProfileCard.css';


const Profilecard = props => (

    <div className="Profilecard">
        <img id="profilePic" src={props.image} alt="img"></img>
        <p>Job Status: {props.jobStatus}</p>
        <br></br>
        <div className="links">
            <a href={props.githubLink}><i className="fab fa-github-alt"></i></a>
            <a href={props.linkedinLink}><i className="fab fa-linkedin"></i></a>
            <a href={props.portfolioLink}><i className="fa fa-folder-open"></i></a>
        </div>
        <p className="contact"><i className="fas fa-envelope"></i> {props.emailAddress}</p>
        <p className="contact"><i className="fas fa-phone"></i> {props.phoneNumber}</p>
        <p><button id="contactBtn">{props.firstName} {props.lastName}</button></p>
    </div>

);

export default Profilecard;