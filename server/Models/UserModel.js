
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    UserChoice: {
        Country: {type: String, default: null}, 
        City: {type: String, default: null}, 
        JokeCategory: {type: String, default: null}
    }
});


userSchema.plugin(findOrCreate);

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);