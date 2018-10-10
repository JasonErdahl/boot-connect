import React, { Component } from 'react';
import Profilecard from './components/Members/ProfileCard/ProfileCard';
import Jobboard from './components/Dashboard/JobBoard/Jobboard';
import Modal from './components/Login/Modal/Modal';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {

  state = {
    showModal: false
  }

  showModal = event => {
    event.preventDefault()
    this.setState({showModal: true})
  }

  closeModal = (event) => {
    event.preventDefault()
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="App">
      <Modal show={this.state.showModal} closeModal={this.closeModal} ></Modal>
          {/* <Profilecard></Profilecard> */}
          {/* <Jobboard></Jobboard> */}
          {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
