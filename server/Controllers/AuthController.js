const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");


module.exports.Signup = async (req, res, next) => {

    try {

        const { email, password, username } = req.body;

        // check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        const user = await User.create({ email, password, username });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });

        res.status(201).json({ message: "User registered successfully", success: true, user });
        next();
    }
    catch (err) {
        console.error(err);
    }
}


module.exports.Login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const auth = await bcrypt.compare(password, user.password);

        if (!auth) {
            return res.status(401).json({ message: 'Incorrect username or password!' });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        if (user.UserChoice.Country === null || user.UserChoice.City === null) {
            res.status(201).json({ message: "Login Successfull", success: true, appSetUp: false });
        } else {
            res.status(201).json({message: "Login Successfull", success: true, appSetUp: true});
        }
        
        next();

    } catch (error) {
        console.error(error);
    }
}