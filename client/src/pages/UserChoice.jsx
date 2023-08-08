// private page
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../css/home.css';


const UserChoice = () => {

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [userChoice, setUserChoice] = useState({
        country: "",
        city: "",
        category: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserChoice({
            ...userChoice,
            [name]: value
        });
    };

    useEffect(() => {

        // not authorized
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }

            const { data } = await axios.post("http://localhost:8000/choice",
                {},
                { withCredentials: true });

            const { status, user } = data;
            setUsername(user);

            return status ? toast(`Hello ${user}`, { position: "top-right" }) : (removeCookie("token"), navigate("/login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);


    const handleSubmit = async () => {

        console.log(userChoice)
    }


    return (
        <>
            <div id="choice-page">
                <h4 className="choice-title">Hi {username}</h4>
                <h5>Lets set up your app settings, please choose your location and joke category for your app.</h5>
                <div className="row align-items-center" style={{ height: "60vh" }}>
                    <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "300px" }}>
                        <form>
                            <input onChange={handleInput} placeholder="Country"  className="form-control"></input>
                            <input onChange={handleInput} placeholder="City"  className="form-control"></input>
                            <select className="dropdown" name="dropdown">
                                <option value="Programming">Programming</option>
                                <option value="Misc">Random</option>
                                <option value="Dark">Dark</option>
                                <option value="Spooky">Spooky</option>
                                <option value="Pun">Pun</option>
                            </select>
                            <button onClick={handleSubmit} className="btn btn-primary choiceForm-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}


export default UserChoice;