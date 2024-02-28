import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useState } from 'react';
import './CSS/Login.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

const SignUpSchema = yup.object({
  name: yup.string().required("First Name is required"),
  email: yup.string().email("Valid email must be provided").required("Email address is required"),
  rollNo: yup.string().required("Roll No is required"),
  phoneNumber: yup.string().required("Mobile Number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Password is to be confirmed")
});

const initialValues = {
  name: '',
  email: '',
  rollNo: '',
  phoneNumber: '',
  password: '',
  confirmPassword: ''
}

function Register() {
  
  const navigate = useNavigate();
  // const notify = () => toast("User Registered Successfully!!");

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/user/register', values)
        .then(result => {
          console.log(result)
          toast.info("User Registered Successfully!!");
          
          navigate('/login')
        })
        .catch(error => console.log(error))
    },
  });

  return (
    <form className='login-form' onSubmit={formik.handleSubmit}>
      <h3>Register</h3>
      <input className='form-control' type='text' name='name'
        placeholder='Enter Full Name'
        value={formik.values.name}
        onChange={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")} />
      <div className='error'>
        {formik.touched.name && formik.errors.name}
      </div>

      <input className='form-control' type='email' name='email'
        placeholder='Email' value={formik.values.email}
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")} />
      <div className='error'>
        {formik.touched.email && formik.errors.email}
      </div>
      <input className='form-control' type='number' name='rollNo'
        placeholder='Roll No' value={formik.values.rollNo}
        onChange={formik.handleChange("rollNo")}
        onBlur={formik.handleBlur("rollNo")} />
      <div className='error'>
        {formik.touched.rollNo && formik.errors.rollNo}
      </div>
      <input className='form-control' type='tel' name='phoneNumber'
        placeholder='Phone Number' value={formik.values.phoneNumber}
        onChange={formik.handleChange("phoneNumber")}
        onBlur={formik.handleBlur("phoneNumber")} />
      <div className='error'>
        {formik.touched.phoneNumber && formik.errors.phoneNumber}
      </div>

      

      

      <input className='form-control' type='password' name='password'
        placeholder='Password' value={formik.values.password}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")} />
      <div className='error'>
        {formik.touched.password && formik.errors.password}
      </div>

      <input className='form-control' type='password' name='confirmPassword'
        placeholder='Password' value={formik.values.confirmPassword}
        onChange={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")} />
      <div className='error'>
        {formik.touched.confirmPassword && formik.errors.confirmPassword}
      </div>
      {/* <input type='text' placeholder='Enter Your Name' name='name' value={formik.values.name} onChange={formik.handleChange("name")} />
      <input type='email' placeholder='Email...' value={email} onChange={handleEmailChange} />
      <input
        type='number'
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <input type='number' placeholder='TIET Roll No' value={rollNo} onChange={handleRollNoChange} />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password...'
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Confirm password...'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div>
        <input type='checkbox' id='show-password' onChange={handleShowPassword} />
        <label htmlFor='show-password'>Show password</label>
      </div> */}
      <button type='submit'>Register</button>
      {/* {error && <p className="error">{error}</p>} */}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}


export default Register;