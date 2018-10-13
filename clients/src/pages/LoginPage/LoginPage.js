import React, { Component } from 'react';
import Modal from '../../components/Login/Modal/Modal';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/LoginForm/LoginForm.css';
import '../../components/Login/Modal/Modal.css';


class LoginPage extends Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler(event) {
        event.preventDefault();
    
        let reader = new FileReader();
        let file = event.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            selectedFile: file
          });
        }
    
        reader.readAsDataURL(file)
      }

    render() {

        document.body.style.background = "url('../../../assets/backgroundColor1.png')"

        return (
                <LoginForm>
                    <Modal image={this.state.selectedFile} fileSelectedHandler={this.fileSelectedHandler}></Modal>
                </LoginForm>
        )
    }
}

export default LoginPage;