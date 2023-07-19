import React from "react";
import { useState } from "react";
import axios from "axios";


function Register() {

    const [regForm, setRegForm] = useState({
        username: "",
        useremail: "",
        userpassword: "",
        confirmpassword: ""
    });

    const [err, setErr] = useState(false);


    function handleInput(event) {
        const { name, value } = event.target;
        setRegForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();


        if (regForm.userpassword !== regForm.confirmpassword) {
            setErr(true);
        } else {
            axios.post("http://localhosst:3001/register")
                .then(res => {
                    console.log("form posted!");
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="row align-items-center" style={{ height: "87vh" }}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "515px" }}>
                <h1 className="form-title">Register</h1>
                <form action="/register" method="POST">
                    <label htmlFor="useremail">Email</label>
                    <input type="email" name="useremail" className="form-control" onChange={handleInput} required></input>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleInput} required></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="userpassword" className="form-control" onChange={handleInput} required></input>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" name="confirmpassword" className="form-control" onChange={handleInput} required></input>
                    <button className="btn btn-primary submit-btn" onClick={handleSubmit} type="submit">Register</button>
                    {err ? <span className="error">Passwords do not match!</span> : <p>Already have an account?<a href="/login">Login</a></p>}
                </form>
            </div>
        </div>
    );
}


export default Register;

