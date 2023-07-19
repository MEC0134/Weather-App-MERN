import React from "react";
import { useState } from "react";

function Login() {

    const [logForm, setLegForm] = useState({
        username: "", 
        userpassword: ""
    });
    
    
    function handleInput(event) {
        const {name, password} = event.target; 
        setLegForm({
            username: name, 
            userpassword: password
        });
    }



    return (
        <div className="row align-items-center" style={{ height: "87vh" }}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "330px" }}>
                <h1 className="form-title">Login</h1>
                <form action="/login" method="POST">
                    <label for="username">Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleInput} required></input>
                    <label for="password">Password</label>
                    <input type="password" name="userpassword" className="form-control" onChange={handleInput} required></input>
                    <button class="btn btn-primary submit-btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}


export default Login;