import React from 'react';
import './LoginForm.css';


const Login = props =>    (
      <div className="LoginForm">
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
  
export default Login;