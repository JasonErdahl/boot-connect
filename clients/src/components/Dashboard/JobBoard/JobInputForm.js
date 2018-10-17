import React, {Component} from "react";
import API from "../../../utils/API";
import './Jobboard.css';

class Jobinputform extends Component {
  state = {

  };

  handleinputchange = e => {
    console.log('handling change')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validInput = () => {
    const optionalFields = [
      'jobURL',
      'jobNotes'
    ]

    const inputs = Object.keys(this.state)
    const requiredInputs = inputs.filter(input => !optionalFields.includes(input));
    const populatedInputValues = requiredInputs.map(input => this.state[input])
    const validRequiredInputValues = populatedInputValues.filter(value => value && value.length > 0)

    return validRequiredInputValues.length === 3;
  }

  handleSubmit = () => {
    if (this.validInput()) {
      console.log('handlesubmit');
      this.postJob()
    }
  }

  postJob = () => {
      API.saveDashboardJobs({
        ...this.state  // NAME AND DB FIELD MUST MATCH HERE
      }).then((data) => {
        console.log(data)
        Object.keys(this.state).forEach(key => {
          this.setState({[key]:''});
          this.props.loadJobboard();
        })
      }).catch(err =>{console.log(err)})

  }


  render() {
    return <div className="jobInputForm">
    <div><h6>*The post button appears after adding text to the required field</h6></div>
    <input onChange={this.handleinputchange} className="job-info-input" type="text" name="jobTitle" placeholder="Job Title...(Required)" value={this.state.jobTitle} ></input>
    <input onChange={this.handleinputchange} className="job-info-input" type="text" name="jobCompany" placeholder="Company...(Required)" value={this.state.jobCompany}></input>
    <br></br>
    <input onChange={this.handleinputchange} className="job-info-input" type="text" name="jobLocation" placeholder="Location...(Required)" value={this.state.jobLocation}></input>
    <input onChange={this.handleinputchange} className="job-info-input" type="url" name="jobURL" placeholder="Job link..." value={this.state.jobURL}></input>
    <br></br>
    <input onChange={this.handleinputchange} className="job-info-input" type="text" name="jobNotes" placeholder="Additonal notes..." value={this.state.jobNotes}></input>
    <button className={this.validInput() ? 'validInput' : 'invalidInput'} onClick = {this.handleSubmit} id="jobPostBtn">Post</button>
    {console.log(JSON.stringify(this.state))}
  </div>
    
  }
}

export default Jobinputform;