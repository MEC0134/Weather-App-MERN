import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';


const Register = () => {

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setformData(({
      ...formData,
      [name]: value
    }));
  }

  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  }

  // notifications
  const handleError = err =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = msg =>
    toast.success(msg, {
      position: "bottom-right",
    });


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error('Passwords do not match, try again!', { position: "top-center" });
    } else {

      try {
        const { data } = await axios.post("http://localhost:8000/signup",
          {
            ...formData
          }, { withCredentials: true });

        const { success, message } = data;

        if (success) {
          handleSuccess("Registration Successful");
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        } else {
          handleError(message);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setformData({ ...formData, email: "", username: "", password: "", confirmpassword: "" });
    }
  }



  return (
    <>
      <div className="row align-items-center" style={{ height: "87vh" }}>
        <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "525px" }}>
          <h1 className="form-title">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              value={formData.email}
              name="email"
              className="form-control"
              onChange={handleInput}
              required
            />
            <input
              placeholder="Username"
              type="text"
              value={formData.username}
              name="username"
              className="form-control"
              onChange={handleInput}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={formData.password}
              name="password"
              className="form-control"
              onChange={handleInput}
              required
            />
            <input
              placeholder="Confirm Passsword"
              type="password"
              value={formData.confirmpassword}
              name="confirmpassword"
              className="form-control"
              onChange={handleInput}
              required
            />
            <button type="submit" className="btn btn-primary submit-btn">Register</button>
            <p className="redirect-user"> Already have an account?<Link style={{ textDecoration: "none" }} to={"/login"}>Login</Link></p>
            <div className="Oauth-seperator">
              <hr></hr>
              <span>or</span>
              <hr></hr>
            </div>
            <div className="social-icons">
              <p>Signup with</p>
              <IconButton onClick={googleAuth}><GoogleIcon className="icon-google" /></IconButton>
              <IconButton ><FacebookIcon className="icon-fb" /></IconButton>
            </div>
          </form>

        </div>
        <ToastContainer />
      </div>

    </>
  );
}



export default Register