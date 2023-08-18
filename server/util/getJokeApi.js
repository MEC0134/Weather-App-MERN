const axios = require('axios');

module.exports.getJoke = async (jokeCategory) => {

    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory}?type=single&?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
        return response.data.joke;
    } catch (error) {
        console.log(error);

    }
}

