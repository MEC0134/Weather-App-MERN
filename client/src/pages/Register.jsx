import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


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

  // notifications
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
      toast.error('Passwords do not match, try again!', { position: "top-center" });
    } else {

      try {
        const { data } = await axios.post("http://localhost:8000/signup", { ...formData }, { withCredentials: true });

        console.log("Response data:", data); // Log the response data for debugging

        const { success, message } = data;
        console.log("Success Value: ", success);

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

      setformData({ ...formData, email: "", username: "", password: "", confirmpassword: "" });
    }
  }



  return (
    <>
      <div className="row align-items-center" style={{ height: "87vh" }}>
        <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "525px" }}>
          <h1 className="form-title">Register</h1>
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
        <ToastContainer />
      </div>

    </>
  );
}



export default Register