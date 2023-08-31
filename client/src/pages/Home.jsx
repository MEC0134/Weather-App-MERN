import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ClearSky from "./weatherTypes/ClearSky";
import '../css/PrivateRoutes.css';

const Home = () => {


  function getTime() {
    var d = new Date();
    var c_hour = d.getHours();
    var c_min = d.getMinutes();
    var t = c_hour + ":" + c_min;
    return t;
  }

  const [joke, setJoke] = useState("");
  const [user, setUser] = useState({
    userName: "",
    userCity: "",
    userCuntry: ""
  });


  // CONTINUE HERE 
  const [forecast, setForecast] = useState({
    
  });

  const [weather, setWeather] = useState({
    temperature: "",
    description: ""
  });

  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const capitalizeFirstLetter = (word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
  }


  useEffect(() => {

    const fetchData = async () => {

      if (!cookies.token) {
        navigate("/login");
      }

      try {

        const { data } = await axios.get("http://localhost:8000/user-data", { withCredentials: true });

        const { success, user, userJoke, weather, forecast } = data;

        if (success) {
          setJoke(userJoke);
          setUser({ userName: user.username, userCity: user.UserChoice.City, userCuntry: user.UserChoice.Country });
          setWeather({ temperature: weather.temperature, description: weather.description });

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

        <div className="overlay-elements">

          <div className="weather-container">
            <h3 className="home-title">{capitalizeFirstLetter(user.userCity)}, {capitalizeFirstLetter(user.userCuntry)}</h3>
            <p>{Math.round(weather.temperature)}&deg;C</p>
            <p>{capitalizeFirstLetter(weather.description)}</p>
            <p>{getTime()}</p>
          </div>

          <div className="joke-container">
            <p>{joke}</p>
          </div>

          <div className="forecast-container">
            {Object.keys(forecast).map(dayKey =>
              <div key={dayKey} className="forecast-card">
                <p className="forecast-day">{dayKey}</p>
                <img className="forecast-icon"></img>
                <p className="forecast-minmax">
                  Min {forecast[dayKey].Min}°C, Max {forecast[dayKey].Max}°C
                </p>
              </div>
            )}

          </div>

          <div className="logout">
            <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
          </div>

        </div>

        <div className="weather-component">
          <ClearSky />
        </div>


      </div>


    </>
  )
}

export default Home;