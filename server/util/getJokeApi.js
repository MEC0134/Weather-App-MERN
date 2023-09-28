const axios = require('axios');

module.exports.getJoke = async (jokeCategory) => {

    try {

        const response = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory}?blacklistFlags=religious,sexist,explicit${jokeCategory === 'Spooky' ? '&type=twopart' : '&type=single'}`)

        let joke = response.data.joke;

        const words = joke.split(' ');

        const maxWordCount = 18;

        if (words.length > maxWordCount) {
            return module.exports.getJoke(jokeCategory);
        }

        return joke;
    } catch (error) {
        console.log(error);
    }
}
