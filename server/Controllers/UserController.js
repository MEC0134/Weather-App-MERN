const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const { getJoke } = require('../util/getJokeApi');
const { getWeather } = require('../util/getWeather');

module.exports.SetUserSettings = async (req, res, next) => {

  try {
    const { country, city, category, user } = req.body;

    const setUserChoice = await User.findOneAndUpdate(
      { username: user },
      { $set: { 'UserChoice.Country': country, 'UserChoice.City': city, 'UserChoice.JokeCategory': category } });


    if (!setUserChoice) {
      return res.status(500).json({ message: "Could not update document!", success: false });
    }

    res.status(201).json({ message: "User updated", success: true, user: setUserChoice, });

  } catch (error) {
    console.log(error);
  }
}




module.exports.GetUserSettings = async (req, res) => {

  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decodedToken.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found!", success: false });
    }

    const usersJoke = await getJoke(user.UserChoice.JokeCategory);

    const userWeather = await getWeather(user.UserChoice.City);


    const weatherContainer = {
      temperature: userWeather.list[0].main.temp,
      min: userWeather.list[0].main.temp_min,
      min: userWeather.list[0].main.temp_max,
      description: userWeather.list[0].weather[0].description,
    };

    const forecast = {
      "Day-1": {
        "Min": userWeather.list[9].main.temp_min,
        "Max": userWeather.list[9].main.temp_max,
        "Icon": userWeather.list[9].weather.icon,
      },
      "Day-2": {
        "Min": userWeather.list[19].main.temp_min,
        "Max": userWeather.list[19].main.temp_max,
        "Icon": userWeather.list[19].weather.icon,
      },
      "Day-3": {
        "Min": userWeather.list[29].main.temp_min,
        "Max": userWeather.list[29].main.temp_max,
        "Icon": userWeather.list[29].weather.icon,
      },
      "Day-4": {
        "Min": userWeather.list[39].main.temp_min,
        "Max": userWeather.list[39].main.temp_max,
        "Icon": userWeather.list[39].weather.icon,
      }
    }

    res.status(200).json({
      message: "User data retrieved successfully",
      success: true,
      user: user,
      userJoke: usersJoke,
      weather: weatherContainer,
      weatherForecast: forecast
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}