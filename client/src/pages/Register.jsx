import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import FormValidate from "./components/FormValidate";
import "./css/forms.css";

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

  const handleError = err =>
    toast.error(err, {
      position: "top-center"
    });

  const handleSuccess = msg =>
    toast.success(msg, {
      position: "bottom-right",
    });


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error('Passwords do not match!', { position: "top-center" });
    } else {

      if (!FormValidate(formData.email)) {
        toast.error('Invalid email format!', { position: "top-center" });
      } else {
        
        try {

          const { data } = await axios.post("https://clima-g901.onrender.com/signup", { ...formData }, { withCredentials: true });
  
  
          const { success, message } = data;
  
          if (success) {
            handleSuccess(message);
            setTimeout(() => {
              navigate('/login');
            }, 1000);
          }
  
        } catch (error) {
          if (!error.response.data.success) {
            handleError(error.response.data.message);
          }
          console.log("Axios error:", error);
        }
      }
      setformData({ ...formData, email: "", username: "", password: "", confirmpassword: "" });
    }
  }


  return (
    <>
      <div id="register-container">
        <div className="row align-items-center" style={{ height: "85vh" }}>
          <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame register-form">
            <h1 className="form-title">Register</h1>
            <div className="form-group">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  name="username"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmpassword}
                  name="confirmpassword"
                  className="form-control"
                  onChange={handleInput}
                  required
                />
                <button type="submit" className="btn btn-primary ">Register</button>
                <p className="redirect-user"> Already have an account?<Link style={{ textDecoration: "none" }} to={"/login"}>Login</Link></p>
              </form>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}



export default Register