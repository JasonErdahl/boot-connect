import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li id="home">Dashboard</li>
      <li id="member">Members</li>
      <li id="logout">LogOut</li>
    </ul>
  </nav>
);

export default Navbar;
