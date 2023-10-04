import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import ForecastCard from "./components/ForecastCards";
import WeatherInfoCard from "./components/WeatherInfoCard";
import LoadingSpinner from "./components/LoadingSpinner";
import PrivateRoute from "./components/PrivateRoute";
import '../css/PrivateRoutes.css';


const Home = () => {

  const getToday = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const today = getToday();
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");
  const [user, setUser] = useState({
    userCity: ""
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


  useEffect(() => {
    const fetchData = async () => {

      try {

        const { data } = await axios.get("https://clima-api.onrender.com/user-data", { withCredentials: true });
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
          setLoading(false);
        }

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [cookies, navigate, today]);


  const Logout = () => {
    removeCookie("token");
    navigate('/');
  };

  return (
    <PrivateRoute>
      <>

        <div id="home-container">

          <div className="overlay-elements">

            <div className="weather-container">
              {loading ? (
                ''
              ) : (
                <WeatherInfoCard
                  city={user.userCity}
                  temperature={weatherToday.temperature}
                  description={weatherToday.description}
                />
              )}
            </div>

            <div className="joke-container">
              <p>{joke}</p>
            </div>

            <div className="forecast-container">
              {loading ? (
                ''
              ) : (
                Object.keys(forecast).map((day, index) => (
                  <ForecastCard
                    key={index}
                    day={day}
                    icon={forecast[day].Icon}
                    min={forecast[day].Min}
                    max={forecast[day].Max}
                  />
                ))
              )}
            </div>

            <div className="logout">
              <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
            </div>

          </div>

          <div className="weather-component">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <WeatherDisplay description={weatherToday.description} />
            )}
          </div>
        </div>
      </>
    </PrivateRoute>
  )
}

export default Home;