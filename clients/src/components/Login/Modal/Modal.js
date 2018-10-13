import React from "react";
import './Modal.css';


const Modal = props =>(
  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        <h4 className="modal-title" id="myModalLabel">Sign Up</h4>
      </div>
      <div className="modal-body">
        <div className="circle">
          <img className="profile-pic" alt="profileImage" src="https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg" />
        </div>
        <br></br>
        <label className="custom-file-upload">
          <i className="fa fa-camera upload-button"></i> Upload Profile
  </label>
        <input id="modalInput" type="file" id="file-upload" accept="image/*" />
        <br></br>
        <input id="modalInput" type="text" placeholder="Firstname" />
        <input id="modalInput" type="text" placeholder="Lastname" />
        <br></br>
        <input id="modalInput" type="url" placeholder="Github Link" />
        <input id="modalInput" type="url" placeholder="Portfolio Link" />
        <br></br>
        <h6 className="infoMsg">Create Your Login</h6>
        <input id="modalInput" type="text" placeholder="Username" />
        <input id="modalInput" type="password" placeholder="Password" />

      </div>
      <div className="modal-footer">
        <button id="closeModalBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button id="saveModalBtn" type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

)

export default Modal;


