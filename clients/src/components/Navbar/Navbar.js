import React from "react";
import "./Navbar.css";

const Navbar = props => (
 <nav>
   <ul>
   <li id="dashboard">
     <a
       onClick={() => props.handlePageChange("DashboardPage")}
       className={
         props.currentPage === "DashboardPage" ? "nav-link active" : "nav-link"
       }
     > Dashboard </a></li>

     <li id="member">
     <a
       onClick={() => props.handlePageChange("MemberPage")}
       className={
         props.currentPage === "MemberPage" ? "nav-link active" : "nav-link"
       }
     > Members </a></li>

     <li id="logout">
     <a
       onClick={() => props.handlePageChange("LoginPage")}
       className={
         props.currentPage === "LoginPage" ? "nav-link active" : "nav-link"
       }
     >LogOut </a></li>
   </ul>
 </nav>
);

export default Navbar;
