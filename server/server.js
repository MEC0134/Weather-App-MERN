require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); 
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
  secret: process.env.secret_key,
  resave: false,
  saveUninitialized: false,
  cookie: {}
}));

app.use(passport.initialize());
app.use(passport.session());


// --------------------- DB --------------------- // 

mongoose.connect("mongodb://127.0.0.1:27017/weatherAppDB");

const userSchema = new mongoose.Schema({
  name: String,
  email: String, 
  password: String 
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

// --------------------- DB --------------------- // 

passport.use(User.createStrategy());

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
        });
    });
});
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
      return cb(null, user);
  });
});



app.get("/api", (req, res) => {
  res.json({ "favoriteFood": ["Sarimsakli Kofte", "Ciger Sis", "Adana Kebab"] });
});


app.post('/register', (req, res) => {
  
  // const {wfw, wef, wwd, ef} = req.body;


  console.log(req.body);
});















// React will run on port: 3000
app.listen(3001, () => { console.log(`Server listening on 3001`); });