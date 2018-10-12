import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MembersPage from './pages/MemberPage/MemberPage';

class App extends Component {

//  state = {
//    showModal: false
//  }

 /* showModal = event => {
   event.preventDefault()
   this.setState({showModal: true})
 }

 closeModal = (event) => {
   event.preventDefault()
   this.setState({showModal: false})
 } */

 state = {
   currentPage: "DashboardPage"
 };

 handlePageChange = page => {
   this.setState({ currentPage: page });
 };

 renderPage = () => {
   if (this.state.currentPage === "DashboardPage") {
     return <DashboardPage />;
   } else if (this.state.currentPage === "LoginPage") {
     return <LoginPage />;
   } else if (this.state.currentPage === "MemberPage") {
     return <MembersPage />;
   }
 };

 render() {
   return (
     <div>
       <Navbar
         currentPage={this.state.currentPage}
         handlePageChange={this.handlePageChange}
       />
       {this.renderPage()}
     </div>
   );
 }
}

export default App;
