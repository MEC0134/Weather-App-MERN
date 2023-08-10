const User = require("../Models/UserModel");
const mongoose = require("mongoose");


module.exports.UserSettings = async (req, res, next) => {

    try {

        const {country, city, category, user} = req.body; 
        
        const updateUser = await User.findOneAndUpdate(
            {username: user}, 
            {$set: {'UserChoice.Country': country, 'UserChoice.City': city, 'UserChoice.JokeCategory': category}});

        
        if(!updateUser) {
            return res.status(500).json({message: "Could not update document!", success: false});
        }

        res.status(201).json({message: "User updated", success: true, user: updateUser});
        next();

    } catch (error) {
        console.log(error);        
    }

}