import React, {Component} from 'react';
import './LoginForm.css';
import API from '../../../utils/API';


class LoginForm extends Component {

  state={

  }

  handleInputChange = name => event => {
    console.log(name)
       this.setState({
          [name]: event.target.value
       })
  }

  handleLogin = event =>{
    event.preventDefault()
    API.login(this.state.loginID, this.state.Password).then(data => 
      this.props.isLoginSuccessful())
  }

  render() {

    return (
    <div className="LoginForm">
      <h1>&lt; BOOT_CONNECT &#47;&gt;</h1>
      <div className="login">
        <form>
          <p className="text">if (accountExist = = = true)</p>
          <p className="text"></p>
          <div>
            <input onChange={this.handleInputChange('loginID')} id="loginUsername" type="text" placeholder="Username"></input>
          </div>
          <br></br>
          <div>
            <input onChange={this.handleInputChange('Password')} id="loginPassword" type="password" placeholder="Password"></input>
          </div>
          <br></br>
          <div>
            <button onClick={this.handleLogin} id="loginBtn">Login</button>
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
