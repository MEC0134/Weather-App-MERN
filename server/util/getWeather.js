const axios = require('axios');

module.exports.getWeather = async (city) => {

    try {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_APIKEY}`);
        console.log(response.data);

    } catch (error) {
        
    }

}


