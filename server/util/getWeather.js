const axios = require('axios');

module.exports.getWeather = async (city) => {

    try {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.WEATHER_APIKEY}`);
        return response.data;

    } catch (error) {
        
    }

}


