import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ClearSky from "./weatherTypes/ClearSky";
import '../css/PrivateRoutes.css';

const Home = () => {

  const [joke, setJoke] = useState("");
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();


  useEffect(() => {

    const fetchData = async () => {

      if (!cookies.token) {
        navigate("/login");
      }

      try {

        const { data } = await axios.get("http://localhost:8000/user-data", { withCredentials: true });

        const { success, username, userJoke } = data;

        console.log(data);


        if (success) {
          setJoke(userJoke);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cookies, navigate]);



  const Logout = () => {
    removeCookie("token");
    navigate('/');
  };

  return (
    <>

      <div id="home-container">

          <div id="home-container">

            <div className="overlay-elements">
              <div className="joke-container">
                <p>{joke}</p>
              </div>
              <h3 className="home-title">City, Country</h3>
              <div className="logout">
                <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
              </div>
            </div>

            <div className="weather-container">
              <ClearSky />
            </div>

          </div>

      </div>


    </>
  )
}

export default Home;