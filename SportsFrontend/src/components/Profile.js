import React, { useEffect, useState } from "react";
import "./CSS/Profile.css";
import profile from "../img/profile.jpg";

const Profile = () => {
  // const [UserData,setUserData] = useState({});
  // const [EmailData,setEmailData] = useState({});
  // useEffect(()=>{
  //     const savedUserData = localStorage.getItem('User_Name');
  //     if(savedUserData)
  //     {
  //         setUserData(JSON.parse(savedUserData));
  //     }
  //     const savedEmailData = localStorage.getItem('User_Email');
  //     if(savedEmailData){

  //         setEmailData(JSON.parse(savedEmailData));
  //     }

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5" width="150px" src={profile} />
            <span className="font-weight-bold">Name</span>
            <span className="text-black-50">user@thapar.edu</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">
                <b>Profile Settings</b>
              </h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                id='profile-fname'
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Last Name</label>
                <input
                id='profile-lname'
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                id='email-profile'

                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                id='phone-profile'
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input
                id='address-1-profile'
                  type="text"
                  className="form-control"
                  placeholder="Enter address line 1"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 2</label>
                <input
                id='address-2-profile'
                  type="text"
                  className="form-control"
                  placeholder="Enter address line 2"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Postcode</label>
                <input
                id="postcode-profile"
                  type="text"
                  className="form-control"
                  placeholder="PostalCode"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">State</label>
                <input
                id='state-profile'
                  type="text"
                  className="form-control"
                  placeholder="Enter address line 2"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Area</label>
                <input
                id='area-profile'
                  type="text"
                  className="form-control"
                  placeholder="Enter address line 2"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Stream of Education</label>
                <input
                id='education-profile'
                  type="text"
                  className="form-control"
                  placeholder="Education"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                id='country-profile'
                  type="text"
                  className="form-control"
                  placeholder="country"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="state"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button id='profile-btn' className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>
                <b>More Information (Not editable)</b>
              </span>
            </div>
            <br></br>
            <div className="col-md-12">
              <label className="labels">Thapar Roll No.</label>
              <input
                type="text"
                className="form-control"
                placeholder="Roll No."
                disabled
              />
            </div>{" "}
            <br></br>
            <div className="col-md-12">
              <label className="labels">Hostel Residing Currently</label>
              <input
                type="text"
                className="form-control"
                placeholder="Hostel"
                disabled
              />
            </div>{" "}
            <br></br>
            <div className="col-md-12">
              <label className="labels">Hostel Room No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Room No."
                disabled
              />
            </div>{" "}
            <br></br>
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input
                type="text"
                className="form-control"
                placeholder="Additional details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
