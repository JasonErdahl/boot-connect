import React, { Component } from 'react';
import Modal from '../../components/Login/Modal/Modal';
import Login from '../../components/Login/LoginForm/LoginForm';
import '../components/Login/LoginForm.css';
import '../components/Login/Modal/Modal.css';


class LoginPage extends Component {

    rener() {
        return (
            <Login>
                <Modal></Modal>
            </Login>
        )
    }
}

export default LoginPage;