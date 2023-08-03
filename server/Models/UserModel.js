
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new mongoose.Schema({
    googleId: String, 
    facebookId: String,
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [false, "Your password is required"],
    },
});


userSchema.plugin(findOrCreate);

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});


module.exports = mongoose.model("User", userSchema);