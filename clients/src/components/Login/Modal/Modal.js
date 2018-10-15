import React from "react";
import './Modal.css';

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.fileInput = React.createRef();
  }
  state={
    value: "Employed",
    selectedFile: null
  }

  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.fileInput.current.files[0])
    let reader = new FileReader();
    console.log(reader)
        let file = this.fileInput.current.files[0];
    
        reader.onloadend = () => {
          this.setState({
            selectedFile: reader.readAsDataURL(file)
          }, () => {
            console.log(this.state, ' is state after reading file')
          });
        }

        reader.onloadstart = () => {
          this.setState({
            selectedFile: reader.readAsDataURL(file)
          }, () => {
            console.log("this.state, ' is state after reading file'")
          });
        }
  }

  handleJobStatus = event => {
    console.log("Event ", event)
  }

  fileSelectedHandler = event => {
    console.log(' Event output ', event)
  }
  render() {

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
                <img className="profile-pic" alt="im" src={this.props.selectedFile} />
              </div>
              <br></br>
              <form onSubmit={this.handleSubmit}>
              <label className="custom-file-upload">
                <i className="fa fa-camera upload-button"></i> Select Profile
                <input ref={this.fileInput} type="file" id="file-upload" accept="image/*" />
              </label>
              <button type="submit">Preview</button>
              </form>
              <br></br><br></br>

              <div className="row">
                <div className="col-md-6">
                  <input className="modalInput" type="text" placeholder="Firstname..." />
                </div>
                <div className="col-md-6">
                  <input className="modalInput" type="text" placeholder="Lastname..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input className="modalInput" type="text" placeholder="Email..." />
                </div>
                <div className="col-md-6">
                  <input className="modalInput" type="text" placeholder="Phone Number..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input className="modalInput" type="url" placeholder="Github Link..." />
                </div>
                <div className="col-md-6">
                  <input className="modalInput" type="url" placeholder="Portfolio Link..." />
                </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-md-6">
                  <input className="modalInput" type="url" placeholder="Linkedin..." />
                </div>
                <div className="col-md-6">
                  <select 
                  // onChange={this.handleJobStatus} 
                  // value={this.state.value} 
                  name="jobStatus" id="job-status" className="form-control">
                    <option selected disabled>Job Status...</option>
                    <option value="Employed">Employed</option>
                    <option value="Actively-Looking">Actively Looking</option>
                    <option value="Open-to-new-opportunity">Open to new opportunity</option>
                  </select>
                </div>
              </div>

              <br></br>
              <h6 className="infoMsg">Create Your Login</h6>
              <input className="modalInput" type="text" placeholder="Username" />
              <input className="modalInput" type="password" placeholder="Password" />
              <br></br><br></br>
              <input type="checkbox" value="subscribed" /> Subscribe to our newsletters
          </div>
            <div className="modal-footer">
              <button type="button" id="closeModalBtn" className="btn btn-secondary" onClick={this.props.hideModal}>Close</button>
              <button type="button" id="saveModalBtn" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>)

  }
}

export default Modal;


