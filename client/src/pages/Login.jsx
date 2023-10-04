import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./css/forms.css";


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

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("https://clima-api.onrender.com/login", {
                ...formData
            }, { withCredentials: true });

            const { appSetUp, success, message } = data;

            if (!appSetUp && success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate(`/userSettings/${formData.username}`);
                }, 1000);
            } else {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            }

        } catch (error) {
            if (error.response.status === 401) {
                handleError(error.response.data.message);
            } else if (error.response.status === 404) {
                handleError(error.response.data.message);
            }
            console.log(error);
        }

        setFormData({ username: "", password: "" });
    }


    return (
        <div id="register-container">
            <div className="row align-items-center" style={{ height: "87vh" }}>
                <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame login-form">
                    <h1 className="form-title">Login</h1>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={formData.username} className="form-control" onChange={handleInput} required></input>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} className="form-control" onChange={handleInput} required></input>
                        <button className="btn btn-primary" type="submit">Login</button>
                        <p className="redirect-user">Don't have an account?<Link style={{ textDecoration: "none" }} to={"/register"}>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login;