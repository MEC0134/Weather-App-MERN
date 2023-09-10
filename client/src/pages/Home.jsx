import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import ForecastCard from "./components/ForecastCards";
import WeatherInfoCard from "./components/WeatherInfoCard";
import '../css/PrivateRoutes.css';


const Home = () => {

  const getToday = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const today = getToday();

  const [joke, setJoke] = useState("");
  const [user, setUser] = useState({
    userCity: "",
    userCountry: ""
  });

  const { userCity, userCountry } = user;

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


  useEffect(() => {

    const fetchData = async () => {

      if (!cookies.token) {
        return <redirect to="/login" />;
      }

      try {

        const { data } = await axios.get("http://localhost:8000/user-data", { withCredentials: true });

        const { success, user, userJoke, weatherForecast } = data;
        const todayWeather = weatherForecast[today];

        if (success) {
          setJoke(userJoke);
          setUser({ userCity: user.UserChoice.City, userCuntry: user.UserChoice.Country });
          setWeatherToday({
            temperature: todayWeather.temperature,
            description: todayWeather.description,
          });
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

            <WeatherInfoCard
              userCity={userCity}
              userCountry={userCountry}
              temperature={weatherToday.temperature}
              description={weatherToday.description}
            />
          </div>

          <div className="joke-container">
            <p>{joke}</p>
          </div>
          <div className="forecast-container">
            {Object.keys(forecast).map((day, index) => (
              <ForecastCard
                key={index}
                day={day}
                icon={forecast[day].Icon}
                min={forecast[day].Min}
                max={forecast[day].Max}
              />
            ))}

          </div>

          <div className="logout">
            <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
          </div>

        </div>

        <div className="weather-component">

          <WeatherDisplay description={weatherToday.description} />

        </div>


      </div>


    </>
  )
}

export default Home;