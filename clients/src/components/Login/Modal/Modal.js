import React from "react";
import './Modal.css';
import API from '../../../utils/API'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  //For image preview
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  //Handle input field change
  handleinputchange = e => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
      })
    }
    validInput = () => {
    const optionalFields = [
      'subscriber',
      'profileIMG',
      'phoneNumber',
      'githubURL',
      'professionalURL',
      'linkedinURL',
      'jobStatus',
      'imagePreviewUrl'
    ]

    const inputs = Object.keys(this.state)
    const requiredInputs = inputs.filter(input => !optionalFields.includes(input));
    const populatedInputValues = requiredInputs.map(input => this.state[input])
    const validRequiredInputValues = populatedInputValues.filter(value => value && value.length > 0)
    console.log("inputs: "+inputs);
    console.log("requiredInputs: "+requiredInputs);
    console.log("populatedInputValues: "+populatedInputValues);
    console.log("validRequiredInputValues: "+validRequiredInputValues);
    console.log(`-------------------------------------------\n`)
    return validRequiredInputValues.length >= 5;
  }

  //Handle input field change
  handleinputchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
      this.postMember()
  }

  postMember = () => {

    //Set up payload to send to the url
    const savePayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber,
      professionalURL: this.state.professionalURL,
      githubURL: this.state.githubURL,
      linkedinURL: this.state.linkedinURL,
      jobStatus: this.state.jobStatus,
      profileIMG: this.state.imagePreviewUrl,
      loginID: this.state.loginID,
      Password: this.state.Password,
      subscriber: Boolean.valueOf(this.state.subscriber)
    }

    API.saveMember(savePayload).then(() => {
      Object.keys(this.state).forEach(key => {
        this.setState({[key]:''})
      })
    })

}

  render() {

    //Referenced https://gist.github.com/hartzis/0b77920380736f98e4f9 for preview image 
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img id="profileImg" alt="profileImage" src={imagePreviewUrl} />);
    }

    return (
      <div className="modal show" id="#exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">&#123;Sign Up&#125;</h5>
              <button type="button" className="close" onClick={this.props.hideModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="circle">
                {$imagePreview}
              </div>
              <br></br>
              <form>
                <label className="custom-file-upload">
                  <i className="fa fa-camera upload-button"></i> Upload Profile
                <input name="file-upload" onChange={this.handleImageChange} type="file" id="file-upload" accept="image/*" />
                </label>
              </form>
              <br></br><br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="firstName" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="First Name (required)" value={this.state.firstName} />
                </div>
                <div className="col-md-6">
                  <input name="lastName" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Last Name (required)" value={this.state.lastName} />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="emailAddress" onChange={this.handleinputchange} className="modalInput" type="email" placeholder="Email (required)" value={this.state.emailAddress} />
                </div>
                <div className="col-md-6">
                  <input name="phoneNumber" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Phone Number..." value={this.state.phoneNumber} />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="githubURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Github Link..." value={this.state.githubURL} />
                </div>
                <div className="col-md-6">
                  <input name="professionalURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Portfolio Link..." value={this.state.professionalURL} />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="linkedinURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Linkedin..." value={this.state.linkedinURL} />
                </div>
                <div className="col-md-6">
                  <select onChange={this.handleinputchange} name="jobStatus" id="job-status" className="form-control">
                    <option selected disabled>Job Status...</option>
                    <option value="Employed">Employed</option>
                    <option value="Actively Looking">Actively Looking</option>
                    <option value="Open to new opportunities">Open to new opportunities</option>
                  </select>
                </div>
              </div>

              <br></br>
              <h6 className="infoMsg">Create Your Login</h6>
                       
              <input name="loginID" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Username (required)"  value={this.state.loginID} />
              <input name="Password" onChange={this.handleinputchange} className="modalInput" type="password" placeholder="Password (required)"  value={this.state.Password} />
              <br></br><br></br>
              <input name="subscriber" onChange={this.handleinputchange} type="checkbox" checked={this.state.checked}  /> Subscribe to our newsletters<br />
              <div className="modalAlert"><h6>*The post button appears after updating the required fields</h6></div>
          </div>
            <div className="modal-footer">
              <button type="button" id="closeModalBtn" className="btn btn-secondary" onClick={this.props.hideModal}>Close</button>
              <button className={this.validInput() ? 'validInput btn btn-primary' : 'invalidInput btn btn-primary'} onClick = {this.handleSubmit} id="saveModalBtn">Post</button>
              {console.log("this.state: "+JSON.stringify(this.state))}

            </div>
          </div>
        </div>
      </div>)

  }
}

export default Modal;


