import React from "react";
import './Modal.css';


const Modal = props =>(

<div className="modal fade" id="#exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">&#123;Sign Up&#125;</h5>
        <button type="button" onClick={props.closeModal} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <div className="circle">
       <img className="profile-pic" alt="profileImage" src="https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg" />
       </div>
        <br></br>
        <label className="custom-file-upload">
        <i className="fa fa-camera upload-button"></i> Upload Profile
        </label>
        <input type="file" id="file-upload" accept="image/*" />
        <br></br>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <br></br>
        <input type="url" placeholder="Github Link" />
        <input type="url" placeholder="Portfolio Link" />
        <br></br>
        <h6 className="infoMsg">Create Your Login</h6>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password" />
      </div>
      <div className="modal-footer">
        <button type="button" id="closeModalBtn" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="saveModalBtn" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
)

export default Modal;


