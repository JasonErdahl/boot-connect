import React, { Component } from 'react';
import Modal from '../../components/Login/Modal/Modal';
import Login from '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/Modal/Modal';
// import { url } from 'inspector';


class LoginPage extends Component {
    render() {

       
        document.body.style.background = "url('../../../assets/backgroundColor.svg')"
        
        return (
            <Login>
                <Modal></Modal>
            </Login>
        )
    }
}

export default LoginPage;