import React, {Component} from 'react';
import './LoginForm.css';

class LoginForm extends Component {

  render() {

    return (
    <div className="LoginForm">
      <h1>&lt; BOOT_CONNECT &#47;&gt;</h1>
      <div className="login">
        <form>
          <p className="text">if (accountExist = = = true)</p>
          <p className="text"></p>
          <div>
            <input id="loginUsername" type="text" placeholder="Username"></input>
          </div>
          <br></br>
          <div>
            <input id="loginPassword" type="password" placeholder="Password"></input>
          </div>
          <br></br>
          <div>
            <button id="loginBtn">Login</button>
          </div>
          <br></br>
          <p className="text">else</p>
         
          <button onClick={this.props.showModal} id="createAccountBtn" type="button" className="btn btn-primary btn-lg">
            Create An Account
  </button>
        </form>
      </div>
    </div>)
  }

}

export default LoginForm;
