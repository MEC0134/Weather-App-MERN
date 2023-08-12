const User = require("../Models/UserModel");
const mongoose = require("mongoose");
// const joke = require('..//util/getJokeApi');

module.exports.getUserSettings = async (req, res) => {
    try {
      const { username } = req.body;
  
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ message: "User not found!", success: false });
      }
  
      res.status(200).json({
        message: "User settings retrieved successfully",
        success: true,
        appSetUp: user.UserChoice.Country !== null && user.UserChoice.City !== null,
        appSettings: user.UserChoice,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };
  