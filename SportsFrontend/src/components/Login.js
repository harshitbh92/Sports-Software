// //
// import { useState } from "react";
// import "./CSS/Login.css";
// import { Link } from "react-router-dom";
// import { signIn } from "../services/auth";

// function Login(props) {
//   const [email, setEmail] = useState("");
//   const [rollNo,setRollNo] = useState();
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleRollNoChange = (event) => {
//     setRollNo(event.target.value);
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     // Your login logic here
//     if (email === "" || password === "" || rollNo === "") {
//       setError("Please enter email, roll number and password");
//     } else {
//       setError("");
//       const result = await signIn(email, rollNo, password);
//       console.log(result);
//       if (result.success) {
//         props.history.push("/dashboard");
//       }
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleLogin}>
//       <h3>Login</h3>
//       <input
//         type="email"
//         placeholder="Email..."
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <br />
//       <h5>OR sign in with your Roll No</h5>
//       <br />
//       <input
//         type="number"
//         placeholder="TIET Roll No"
//         value={rollNo}
//         onChange={handleRollNoChange}
//       />
//       <input
//         type={showPassword ? "text" : "password"}
//         placeholder="Password..."
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <div>
//         <input
//           type="checkbox"
//           id="show-password"
//           onChange={handleShowPassword}
//         />
//         <label htmlFor="show-password">Show password</label>
//       </div>
//       <button type="submit" onClick={handleLogin}>Login</button>
//       {error && <p className="error">{error}</p>}
//       <p>
//         Create a new account <Link to="/register">Register</Link>
//       </p>
//     </form>
//   );
// }

// export default Login;

// Login.js

import { useState } from "react";
import "./CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginSchema = yup.object({
  email: yup.string().email("Valid email must be provided"),
  rollNo: yup.string(),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  rollNo: "",
  password: "",
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/user/login", values)
        .then((result) => {
          toast.success("User Logged In Successfully!!");
          console.log(result);

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.message || "An error occurred");
          console.error(error);
        });
    },
  });

  return (
    <div>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h3>Login</h3>
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <div className="error">
          {formik.touched.email && formik.errors.email}
        </div>
        <br />
        <h5>OR sign in with your Roll No</h5>
        <br />

        <input
          className="form-control"
          type="number"
          name="rollno"
          placeholder="Roll No"
          value={formik.values.rollNo}
          onChange={formik.handleChange("rollNo")}
          onBlur={formik.handleBlur("rollNo")}
        />
        <div className="error">
          {formik.touched.rollNo && formik.errors.rollNo}
        </div>

        <input
          className="form-control"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <div className="error">
          {formik.touched.password && formik.errors.password}
        </div>
        {/* <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <h5>OR sign in with your Roll No</h5>
      <br />
      <input
        type="number"
        placeholder="TIET Roll No"
        value={rollNo}
        onChange={handleRollNoChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        value={password}
        onChange={handlePasswordChange}
      /> */}
        {/* <div>
          <input
            type="checkbox"
            id="show-password"
            onChange={handleShowPassword}
          />
          <label htmlFor="show-password">Show password</label>
        </div> */}
        <button id="submit">Login</button>
        {/* {error && <p className="error">{error}</p>} */}
        <p>
          Create a new account{" "}
          <Link id="register" to="/register">
            Register
          </Link>
        </p>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Login;