
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    UserChoice: {
        Country: String, 
        City: String, 
        JokeCategory: String
    }
});


userSchema.plugin(findOrCreate);

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);