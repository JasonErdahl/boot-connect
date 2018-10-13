import React from "react";
import './ProfileCard.css';


const Profilecard = props => (

<div className="Profilecard">
    <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="John"></img>
    <h4>John Doe</h4>
    <p className="title">Developer</p>
    <p>University of Minnesota</p>
            <div className="links">
                <i class="fab fa-github-alt"></i> 
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook"></i>
            </div>
    <p><button id="contactBtn">Contact <i class="far fa-envelope"></i></button></p>
</div>

);

export default Profilecard;