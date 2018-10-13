import React, { Component } from 'react';
//import Modal from '../../components/Login/Modal/Modal';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/LoginForm/LoginForm.css';
import '../../components/Login/Modal/Modal.css';


class LoginPage extends Component {

    render() {

        document.body.style.background = "url('../../../assets/backgroundColor1.png')"

        return (
                <LoginForm></LoginForm>
        )
    }
}

export default LoginPage;