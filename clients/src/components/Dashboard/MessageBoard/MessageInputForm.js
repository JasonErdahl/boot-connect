import React, {Component} from "react";
import API from "../../../utils/API";
import './Messageboard.css';


  class Messageinputform extends Component {
  state = {  
    messageError:""
  };

  handleinputchange = e => {
    console.log('handling change')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validInput = () => {
    const optionalFields = []

    const inputs = Object.keys(this.state)
    const requiredInputs = inputs.filter(input => !optionalFields.includes(input));
    const populatedInputValues = requiredInputs.map(input => this.state[input])
    const validRequiredInputValues = populatedInputValues.filter(value => value && value.length > 0)

    return validRequiredInputValues.length === 1;
  }

  handleSubmit = () => {
    if (this.validInput()) {
      console.log('handlesubmit');
      this.postMessage()
    }
  }

  postMessage = () => {
      API.saveDashboardMessages({
        ...this.state  // NAME AND DB FIELD MUST MATCH HERE
      }).then((data) => {
        console.log(data)
        Object.keys(this.state).forEach(key => {
          this.setState({[key]:''})
          this.props.loadMessageboard();
        })
        
      }).catch(err =>{console.log(err)})

  }


  render() {
    return <div className="messageInputForm">
    <div><h6>*The post button appears after adding text to the required fields</h6></div>
     <input onChange={this.handleinputchange} className="message-input-info" type="text" placeholder="Drop a message (Required)" name="body" value={this.state.body}></input>
     <button className={this.validInput() ? 'validInput' : 'invalidInput'} onClick = {this.handleSubmit} id="msgPostBtn">Post</button>
  </div>
    
  }
}

export default Messageinputform;