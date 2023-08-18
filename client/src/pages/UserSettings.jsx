// private page
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../css/PrivateRoutes.css';


const UserSettings = () => {

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
        setUserChoice(({
            ...userChoice,
            [name]: value
        }));
    };

    useEffect(() => {

        // not authorized
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }

            const { data } = await axios.get("http://localhost:8000/choice",
                {},
                { withCredentials: true });

            const { status, user } = data;
            setUsername(user);

            return status ? ' ' : (removeCookie("token"), navigate("/login"));
        };

        verifyCookie();
    }, [cookies, navigate, removeCookie]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const formData = await axios.post("http://localhost:8000/home", { ...userChoice, user: username }, { withCredentials: true });

            const { success, user } = formData.data;

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
        <>
            <div id="choice-page">
                <h4 className="choice-title">Hi {username}</h4>
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
    )
}


export default UserSettings;