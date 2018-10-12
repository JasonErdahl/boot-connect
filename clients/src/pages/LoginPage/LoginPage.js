import React, { Component } from 'react';
import Modal from '../../components/Login/Modal/Modal';
import Login from '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/Modal/Modal';


class LoginPage extends Component {

    render() {
        return (
            <Login>
                <Modal></Modal>
            </Login>
        )
    }
}

export default LoginPage;