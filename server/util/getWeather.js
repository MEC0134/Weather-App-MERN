const axios = require('axios');
const {getDaysOfWeek} = require("../util/getDays");


module.exports.getWeather = async (city) => {

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=50&units=metric&appid=${process.env.WEATHER_APIKEY}`);
        const daysOfWeek = getDaysOfWeek();

        const forecast = {
            [daysOfWeek[0]]: {
                "temperature": response.data.list[0].main.temp,
                "Min": response.data.list[0].main.temp_min,
                "Max": response.data.list[0].main.temp_max,
                "Icon": response.data.list[0].weather[0].icon,
                "description": response.data.list[0].weather[0].description,
            },
            [daysOfWeek[1]]: {
                "Min": response.data.list[9].main.temp_min,
                "Max": response.data.list[9].main.temp_max,
                "Icon": response.data.list[9].weather[0].icon,
            },
            [daysOfWeek[2]]: {
                "Min": response.data.list[19].main.temp_min,
                "Max": response.data.list[19].main.temp_max,
                "Icon": response.data.list[19].weather[0].icon,
            },
            [daysOfWeek[3]]: {
                "Min": response.data.list[29].main.temp_min,
                "Max": response.data.list[29].main.temp_max,
                "Icon": response.data.list[29].weather[0].icon,
            },
            [daysOfWeek[4]]: {
                "Min": response.data.list[39].main.temp_min,
                "Max": response.data.list[39].main.temp_max,
                "Icon": response.data.list[39].weather[0].icon,
            }
        }

        return forecast;

    } catch (error) {
        console.log(error);
    }

}


