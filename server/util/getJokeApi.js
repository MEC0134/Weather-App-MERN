const axios = require('axios');

module.exports.getJoke = async (jokeCategory) => {

    try {

        const response = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })

    } catch (error) {
        console.log(error);

    }
}

