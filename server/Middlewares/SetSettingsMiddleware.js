const User = require("../Models/UserModel");
const mongoose = require("mongoose");
// const joke = require('..//util/getJokeApi');


module.exports.SetUserSettings = async (req, res, next) => {

    try {
        const {country, city, category, user} = req.body; 

        const setUserChoice = await User.findOneAndUpdate(
            {username: user}, 
            {$set: {'UserChoice.Country': country, 'UserChoice.City': city, 'UserChoice.JokeCategory': category}});

        
        if(!setUserChoice) {
            return res.status(500).json({message: "Could not update document!", success: false});
        }


        res.status(201).json({message: "User updated", success: true, user: setUserChoice, });
        next();

    } catch (error) {
        console.log(error);        
    }

}


