import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ClearSky from "./weatherTypes/ClearSky";
import '../css/PrivateRoutes.css';

const Home = () => {

  const [joke, setJoke] = useState("");
  const [user, setUser] = useState({
    userName: "",
    userCity: "",
    userCuntry: ""
  });

  const [forecast, setForecast] = useState({
    Min: "",
    Max: "",
    Icon: ""
  });

  const [weatherToday, setWeatherToday] = useState({
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

        const { success, user, userJoke, weatherForecast } = data;

        if (success) {
          setJoke(userJoke);
          setUser({ userName: user.username, userCity: user.UserChoice.City, userCuntry: user.UserChoice.Country });
          setWeatherToday({ temperature: weatherForecast.DayOne.temperature, description: weatherForecast.DayOne.description });
          setForecast({ ...weatherForecast });
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
            <p>{Math.round(weatherToday.temperature)}&deg;C</p>
            <p>{capitalizeFirstLetter(weatherToday.description)}</p>
          </div>

          <div className="joke-container">
            <p>{joke}</p>
          </div>
          <div className="forecast-container">
            {Object.keys(forecast).map((day, index) => (
              <div key={index} className="forecast-card">
                <p className="forecast-day">{day}</p>
                <img
                  className="forecast-icon"
                  src={"https://openweathermap.org/img/wn/" + forecast[day].Icon + ".png"}
                />
                <p className="forecast-minmax">{forecast[day].Min}&#8451;, {forecast[day].Max}&#8451;</p>
              </div>
            ))}

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