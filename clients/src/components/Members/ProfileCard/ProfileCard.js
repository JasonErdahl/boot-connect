import React from "react";
import './ProfileCard.css';


const Profilecard = props => (

<div className="Profilecard">
    <img src={props.image} alt="John"></img>
    <p className="title">Developer</p>
    <p>{props.school}</p>
            <div className="links">
                <a href={props.githubLink}><i class="fab fa-github-alt"></i></a> 
                <a href={props.linkedinLink}><i class="fab fa-linkedin"></i></a>
                <a href={props.portfolioLink}><i class="fa fa-folder-open"></i></a>
            </div>
    <p>Job Status: {props.jobStatus}</p>
    <p className="contact"><i class="fas fa-envelope"></i> {props.emailAddress}</p>
    <p className="contact"><i class="fas fa-phone-volume"></i> {props.phoneNumber}</p>
    <p><button id="contactBtn">{props.firstName} {props.lastName}</button></p>
</div>

);

export default Profilecard;