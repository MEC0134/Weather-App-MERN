require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute"); 
const {getWeather} = require('./util/getWeather');

console.log(getWeather('adana')); 

mongoose
    .connect(process.env.MONGO_URL, {
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


//SOLVE REMOVE COOKIE ISSUE FOR PRIVATE ROUTES 

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);























const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

