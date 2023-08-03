const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute"); 
const passport = require("passport");
const cookieSession = require("cookie-session");
const { MONGO_URL, PORT } = process.env;

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));

app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// https://www.youtube.com/watch?v=pdd04JzJrDw&t=160s

app.use(cookieSession({name: "session", keys: ["wolf"], maxAge: 24 * 60 * 60 * 100}))


app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/", authRoute);
























app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

