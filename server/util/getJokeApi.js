const axios = require('axios');

module.exports.getJoke = async (jokeCategory) => {

    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory}?type=single&?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)

        let joke = response.data.joke;

        const words = joke.split(' ');

        const maxWordCount = 20;

        if (words.length > maxWordCount) {
            return module.exports.getJoke(jokeCategory, maxWordCount);
        }

        return joke;
    } catch (error) {
        console.log(error);
    }
}
