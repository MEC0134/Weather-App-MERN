import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';



const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const googleAuth = () => {
        window.open('http://localhost:8000/auth/google');
      }
      const facebookAuth = () => {
        window.open('http://localhost:8000/auth/facebook');
      }
    

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:8000/login", {
                ...formData
            }, { withCredentials: true });

            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/home')
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
            console.log("ERROR");
        }
        setFormData({ username: "", password: "" });
    }



    return (
        <div className="row align-items-center" style={{ height: "87vh" }}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "410px" }}>
                <h1 className="form-title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={formData.username} className="form-control" onChange={handleInput} required></input>
                    <input type="password" placeholder="Password" name="password" value={formData.password} className="form-control" onChange={handleInput} required></input>
                    <button className="btn btn-primary submit-btn" type="submit">Login</button>
                    <p className="redirect-user">Don't have an account?<Link style={{ textDecoration: "none" }} to={"/register"}>Register</Link></p>
                    <div className="Oauth-seperator">
                        <hr></hr>
                        <span>or</span>
                        <hr></hr>
                    </div>
                    <div className="social-icons">
                        <p>Signup with</p>
                        <IconButton onClick={googleAuth}><GoogleIcon className="icon-google" /></IconButton>
                        <IconButton onClick={facebookAuth}><FacebookIcon className="icon-fb" /></IconButton>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}


export default Login;