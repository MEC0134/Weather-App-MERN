const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook");
const passport = require("passport");
const User = require("../Models/UserModel");
 

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_SECRET_KEY,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));


// // passport.serializeUser(function (user, cb) {
// //     process.nextTick(function () {
// //         return cb(null, {
// //             id: user.id,
// //             username: user.username,
// //             picture: user.picture
// //         });
// //     });
// // });

// // passport.deserializeUser(function (user, cb) {
// //     process.nextTick(function () {
// //         return cb(null, user);
// //     });
// // });



