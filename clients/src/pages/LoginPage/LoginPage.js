import React, { Component } from 'react';
import Modal from '../../components/Login/Modal/Modal';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import '../../components/Login/LoginForm/LoginForm.css';
import '../../components/Login/Modal/Modal.css';


class LoginPage extends Component {

    state={
        selectedFile: null,
        showModal: false
      }
    
      showModal = () =>{
        this.setState({showModal: true})
      }
    
      hideModal = () =>{
        this.setState({showModal: false})
      }

    fileSelectedHandler = event => {
        console.log("event output: " , event)
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
                <React.Fragment>
                    <LoginForm showModal={this.showModal}>,
                    </LoginForm>
                    {this.state.showModal ? <Modal hideModal={this.hideModal} fileSelectedHandler={this.fileSelectedHandler}/> : null}
                </React.Fragment>
                

        )
    }
}

export default LoginPage;