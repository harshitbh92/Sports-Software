import React, { useState, useEffect } from 'react';
import "./CSS/Dashboard.css";
import logo_tsms from "../img/logo_tsms.png";
import Logout from '../services/Logout';

const Dashboard = (props) => {
  const [swimmingPoolFormData, setSwimmingPoolFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    educationStream: ''
  });

  const [equipmentState, setEquipmentState] = useState({
    equipment: "",
    studentName: "",
    isEquipmentIssued: false,
  });

  useEffect(() => {
    const savedSwimmingPoolFormData = localStorage.getItem('swimmingPoolEntryFormData');
    if (savedSwimmingPoolFormData) {
      setSwimmingPoolFormData(JSON.parse(savedSwimmingPoolFormData));
    }

    const savedEquipmentState = localStorage.getItem('equipmentState');
    if (savedEquipmentState) {
      setEquipmentState(JSON.parse(savedEquipmentState));
    }
  }, []);

  const handleSwimmingPoolFormChange = (e) => {
    const { name, value } = e.target;
    setSwimmingPoolFormData({
      ...swimmingPoolFormData,
      [name]: value
    });
  };

  // Inside the handleSwimmingPoolFormSubmit function
const handleSwimmingPoolFormSubmit = () => {
    // Check if any required field is empty
    if (
      swimmingPoolFormData.firstName === '' ||
      swimmingPoolFormData.lastName === '' ||
      swimmingPoolFormData.email === '' ||
      swimmingPoolFormData.phoneNumber === '' ||
      swimmingPoolFormData.educationStream === ''
    ) {
      alert('Please fill out all fields');
      return;
    }
  
    // If all fields are filled out, proceed with form submission
    localStorage.setItem('swimmingPoolEntryFormData', JSON.stringify(swimmingPoolFormData));
    // Show successful message
    alert('Swimming pool entry form submitted successfully!');
    // Clear form data
    setSwimmingPoolFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      educationStream: ''
    });
  };
  
  
  
  const handleEquipmentInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setEquipmentState({
      ...equipmentState,
      [name]: value,
    });
  }

 // Inside the handleEquipmentFormSubmit function
 const handleEquipmentFormSubmit = (event) => {
    event.preventDefault();
  
    // Check if any required field is empty
    if (equipmentState.equipment === '' || equipmentState.studentName === '') {
      alert('Please fill out all fields');
      return;
    }
  
    // If all fields are filled out, proceed with form submission
    if (equipmentState.isEquipmentIssued) {
      alert('You have already issued an equipment');
      return;
    }
    setEquipmentState({
      ...equipmentState,
      isEquipmentIssued: true,
    });
    alert('Equipment issued successfully!');
  };
  return (
    <div>
       <div className="container-fuild">
        <div className="topbar" id="topbar2">
            <div className="logo">
                <h2>Dashboard</h2>
            </div>
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <i className="fas fa-bell"></i>
            </a>

            <div className="user" id="user">
                <img src={logo_tsms} alt="" id="img"/>
                <h2>Welcome {props.userName}!</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-sm">
              <div className="sidebar" id="sidebar">
                  <div className="menu-toggle">
                      <i className="fas fa-bars"></i>
                  </div>
                  <ul>
                      <li>
                          <a href="/dashboard">
                              <i className="fas fa-th-large"></i>
                              <div>Dashboard</div>
                          </a>
                      </li>
                      <li>
                          <a href="/">
                              <i className="fa-solid fa-house"></i>
                              <div>Home</div>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i className="fas fa-chalkboard-teacher"></i>
                              <div>Activities</div>
                          </a>
                      </li>
                      <li>
                          <a href="/faculty">
                              <i className="fa-solid fa-user-tie"></i>
                              <div>Coaches</div>
                          </a>
                      </li>
                      <li>
                          <a href="/issued">
                              <i className="fa-solid fa-user-tie"></i>
                              <div>Issued</div>
                          </a>
                      </li>
                      <li>
                          <a href="/profile">
                              <i className="fas fa-cog"></i>
                              <div>Profile</div>
                          </a>
                      </li>
                      <li>
                          <a href="/contact-us">
                              <i className="fa-solid fa-phone"></i>
                              <div>Contact Us</div>
                          </a>
                      </li>
                      <li>
                          <a href='/' >
                              <i className="fa-solid fa-user"></i>
                              <button onClick={()=>{Logout()}}>Logout</button>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="col">
              <div className="main" id="main">
                  <div className="charts">
                      <div className="chart">
                          <h2><b>Swimming Pool Entry Form</b></h2>
                          <hr/>
                          <div className="chart doughnut-chart">
                              <div className="row">
                                  <div className="col-md-6 border-right">
                                      <div className="p-3 py-5">
                                          <h4 className="text-right mb-3"><b>Please fill the form</b></h4>
                                          <div className="form-group">
                                              <label className="labels">First Name</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                                required
                                                name="firstName"
                                                value={swimmingPoolFormData.firstName}
                                                onChange={handleSwimmingPoolFormChange}
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label className="labels">Last Name</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Last name"
                                                name="lastName"
                                                value={swimmingPoolFormData.lastName}
                                                onChange={handleSwimmingPoolFormChange}
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label className="labels">Email</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                required
                                                placeholder="Email"
                                                name="email"
                                                value={swimmingPoolFormData.email}
                                                onChange={handleSwimmingPoolFormChange}
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label className="labels">Phone Number</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Phone number"
                                                name="phoneNumber"
                                                value={swimmingPoolFormData.phoneNumber}
                                                onChange={handleSwimmingPoolFormChange}
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label className="labels">Education Stream</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Education stream"
                                                name="educationStream"
                                                value={swimmingPoolFormData.educationStream}
                                                onChange={handleSwimmingPoolFormChange}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row mt-3">
                                  <div className="mt-5 text-center">
                                      <button
                                        className="btn btn-primary profile-button"
                                        type="button"
                                        onClick={handleSwimmingPoolFormSubmit}
                                      >
                                        Submit
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="chart">
                          <h2><b>Equipment Issue Form</b></h2>
                          <hr/>
                          <div className="chart doughnut-chart">
                              <div className="row">
                                  <div className="col-md-6 border-right">
                                      <div className="p-3 py-5">
                                          <h4 className="text-right mb-3"><b>Please fill the form</b></h4>
                                          <div className="form-group">
                                              <label className="labels">Select an equipment to issue:</label>
                                              <select
                                                className="form-control"
                                                name="equipment"
                                                required
                                                value={equipmentState.equipment}
                                                onChange={handleEquipmentInputChange}
                                              >
                                                <option value="">Select an equipment</option>
                                                <option value="Football">Football</option>
                                                <option value="Bat">Bat</option>
                                                <option value="Ball">Ball</option>
                                                <option value="Basketball">Basketball</option>
                                              </select>
                                          </div>
                                          <div className="form-group">
                                              <label className="labels">Enter your name:</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Your name"
                                                name="studentName"
                                                value={equipmentState.studentName}
                                                onChange={handleEquipmentInputChange}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row mt-3">
                                  <div className="mt-5 text-center">
                                      <button
                                        className="btn btn-primary profile-button"
                                        type="button"
                                        onClick={handleEquipmentFormSubmit}
                                      >
                                        Issue Equipment
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h2 className="modal-title fs-5" id="exampleModalLabel">Notifications</h2>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <div className="row">
                          <div className="col">
                              The institute has several well-maintained playgrounds and International standard
                              synthetic athletic track, synthetic tennis court synthetic Basketball court and Synthetic
                              Badminton indoor court to encourage the students to take part in different games such as
                              Cricket, Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Dashboard;
