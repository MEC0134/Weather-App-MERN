const User = require("../Models/UserModel");
const mongoose = require("mongoose");
const joke = require('..//util/getJokeApi');


module.exports.UserSettings = async (req, res, next) => {

    try {

        const {country, city, category, user} = req.body; 
        
        const setUserChoice = await User.findOneAndUpdate(
            {username: user}, 
            {$set: {'UserChoice.Country': country, 'UserChoice.City': city, 'UserChoice.JokeCategory': category}});

        
        if(!setUserChoice) {
            return res.status(500).json({message: "Could not update document!", success: false});
        }

        const joke = joke.getJoke(category);

        res.status(201).json({message: "User updated", success: true, user: setUserChoice, userJoke: joke});
        next();

    } catch (error) {
        console.log(error);        
    }

}