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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
      this.postMember()
  }

  postMember = () => {

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
      Password: this.state.Password
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
                <input onChange={this.handleImageChange} type="file" id="file-upload" accept="image/*" />
                </label>
              </form>
              <br></br><br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="firstName" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Firstname..." />
                </div>
                <div className="col-md-6">
                  <input name="lastName" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Lastname..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="emailAddress" onChange={this.handleinputchange} className="modalInput" type="email" placeholder="Email..." />
                </div>
                <div className="col-md-6">
                  <input name="phoneNumber" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="Phone Number..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="githubURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Github Link..." />
                </div>
                <div className="col-md-6">
                  <input name="professionalURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Portfolio Link..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input name="linkedinURL" onChange={this.handleinputchange} className="modalInput" type="url" placeholder="Linkedin..." />
                </div>
                <div className="col-md-6">
                  <select name="jobStatus" id="job-status" className="form-control">
                    <option selected disabled>Job Status...</option>
                    <option value="Employed">Employed</option>
                    <option value="Actively-Looking">Actively Looking</option>
                    <option value="Open-to-new-opportunity">Open to new opportunity</option>
                  </select>
                </div>
              </div>

              <br></br>
              <h6 className="infoMsg">Create Your Login</h6>
              <input name="loginID" onChange={this.handleinputchange} className="modalInput" type="text" placeholder="loginID" />
              <input name="Password" onChange={this.handleinputchange} className="modalInput" type="password" placeholder="Password" />
              <br></br><br></br>
              <input onChange={this.handleinputchange} type="checkbox" value="subscribed" /> Subscribe to our newsletters
          </div>
            <div className="modal-footer">
              <button type="button" id="closeModalBtn" className="btn btn-secondary" onClick={this.props.hideModal}>Close</button>
              <button onClick={this.handleSubmit} type="button" id="saveModalBtn" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>)

  }
}

export default Modal;


