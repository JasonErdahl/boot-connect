import React from "react";
import "./Navbar.css";

const Navbar = props => (
 <nav>
   <ul>
   <li id="dashboard">
     <div
       onClick={() => props.handlePageChange("DashboardPage")}
       className={
         props.currentPage === "DashboardPage" ? "nav-link active" : "nav-link"
       }
     > Dashboard </div></li>

     <li id="member">
     <div
       onClick={() => props.handlePageChange("MemberPage")}
       className={
         props.currentPage === "MemberPage" ? "nav-link active" : "nav-link"
       }
     > Members </div></li>

     <li id="logout">
     <div
       onClick={() => props.handlePageChange("LoginPage")}
       className={
         props.currentPage === "LoginPage" ? "nav-link active" : "nav-link"
       }
     >LogOut </div></li>
   </ul>
 </nav>
);

export default Navbar;
