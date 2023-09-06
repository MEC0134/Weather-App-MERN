const axios = require('axios');
const { getDaysOfWeek } = require("../util/getDays");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 1800 });

module.exports.getWeather = async (city) => {

    const cachedData = cache.get(city);

    if(cachedData) {
        
        return cachedData;
    } else {

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=metric&appid=${process.env.WEATHER_APIKEY}`);
            const daysOfWeek = getDaysOfWeek();
            const forecast = {};

            cache.set(city, response.data);
    
            for (let i = 0; i < 5; i++) {
                const startIndex = i * 8;
                const endIndex = startIndex + 8;
                const day = daysOfWeek[i];
    
                forecast[day] = {
                    "temperature": response.data.list[startIndex].main.temp,
                    "Min": response.data.list.slice(startIndex, endIndex).reduce((min, item) => Math.min(min, item.main.temp_min), Infinity),
                    "Max": response.data.list.slice(startIndex, endIndex).reduce((max, item) => Math.max(max, item.main.temp_max), -Infinity),
                    "Icon": response.data.list[startIndex].weather[0].icon,
                    "description": response.data.list[startIndex].weather[0].description,
                };
            }
    
            return forecast;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
