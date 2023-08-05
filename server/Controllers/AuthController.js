const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");


module.exports.Signup = async (req, res, next) => {

    try {

        const { email, password, username } = req.body;

        // check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists!" });
        }

        const hashedPass = await bcrypt.hash(password, 12);


        const user = await User.create({ email, hashedPass, username });
        const token = createSecretToken(user._id); // generate token for new user

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });
        next();
    }
    catch (err) {
        console.error(err);
    }
}


module.exports.Login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            console.log('here is the error');
            return res.status(404).json({ message: 'User not found' })
        }

        const auth = await bcrypt.compare(password, user.password)

        if (!auth) {
            return res.status(401).json({ message: 'Incorrect password or email' })
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });


        res.status(201).json({ message: "User logged in successfully", success: true });
        next()

    } catch (error) {
        console.error(error);
    }
}