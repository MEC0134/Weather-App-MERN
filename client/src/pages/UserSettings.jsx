// private page
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import '../css/PrivateRoutes.css';


const UserSettings = () => {

    const { username } = useParams();

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userChoice, setUserChoice] = useState({
        country: "",
        city: "",
        category: ""
    });

    useEffect(() => {
        setUserName(username);
    }, [username]);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserChoice(({
            ...userChoice,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = await axios.post("https://clima-g901.onrender.com/home", { ...userChoice, user: username }, { withCredentials: true });
            const { success } = formData.data;

            if (success) {
                setTimeout(() => {
                    navigate("/home");
                }, 1000);
            }

        } catch (error) {
            console.log(error);
        }
        setUserChoice({ country: "", city: "", category: "" });
    }

    return (
        <PrivateRoute>
            <>
                <div id="choice-page">
                    <h4 className="choice-title">Hi {userName}</h4>
                    <h5>Lets set up your app settings, please choose your location and joke category for your app.</h5>
                    <div className="row align-items-center" style={{ height: "60vh" }}>
                        <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "300px" }}>
                            <form onSubmit={handleSubmit} >
                                <input onChange={handleInput} value={userChoice.country} name="country" type="text" placeholder="Country" className="form-control" required></input>
                                <input onChange={handleInput} value={userChoice.city} name="city" type="text" placeholder="City" className="form-control" required></input>
                                <select onChange={handleInput} className="form-control select" value={userChoice.category} name="category">
                                    <option value="" disabled>Joke category</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Misc">Random</option>
                                    <option value="Dark">Dark</option>
                                    <option value="Spooky">Spooky</option>
                                    <option value="Pun">Pun</option>
                                </select>
                                <button className="btn btn-primary choiceForm-btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </PrivateRoute>
    )
}


export default UserSettings;