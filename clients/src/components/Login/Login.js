import React, { Component } from 'react';
import Modal from "./Modal/Modal";
import './Login.css';

class Login extends Component {
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
      {/* <TestModal show={this.state.showModal} closeModal={this.closeModal}/> */}
      <h1>&lt; BOOT_CONNECT &#47;&gt;</h1>
      <div className="login">
      <form>
            <p className="text">if (accountExist = = = true)</p>
            <p className="text"></p>
            <div>
              <input type="text" placeholder="Username"></input>
            </div>
            <br></br>
            <div>
              <input type="password" placeholder="Password"></input>
            </div>
            <br></br>
            <div>
              <button id="loginBtn">Login</button>
            </div>
            <br></br>
            <p className="text">else</p>
            <button onClick={this.showModal} id="createAccountBtn" data-toggle="modal" data-target="#exampleModal">Create An Account</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
