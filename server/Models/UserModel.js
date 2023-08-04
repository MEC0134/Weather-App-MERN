
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new mongoose.Schema({
    googleId: String,
    facebookId: String,
    email: String,
    username: String,
    password: String,
});


userSchema.plugin(findOrCreate);


module.exports = mongoose.model("User", userSchema);