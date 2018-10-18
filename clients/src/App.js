import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MembersPage from './pages/MemberPage/MemberPage';

class App extends Component {

  state = {
    currentPage: "LoginPage",
    loggedIn: false
  };

  componentDidMount() {
  }

  isLoginSuccessful = data => {
    this.setState({
      currentPage: "DashboardPage",
      loggedIn: true
    })
  }

  handlePageChange = page => {
    this.setState({
       currentPage: page,
       loggedIn: page === 'LoginPage' ? false : this.state.loggedIn 
      });
  };

  renderPage = () => {
    if (this.state.currentPage === "DashboardPage" && this.state.loggedIn) {
      return <DashboardPage />;
    } else if (this.state.currentPage === "LoginPage") {
      return <LoginPage isLoginSuccessful={this.isLoginSuccessful} />;
    } else if (this.state.currentPage === "MemberPage") {
      return <MembersPage />;
    }
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {this.state.loggedIn ?
          <Navbar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          /> : null
        }

        {this.renderPage()}
      </div>
    );
  }
}

export default App;
