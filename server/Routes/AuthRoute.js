const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const passport = require("passport");
const router = require("express").Router();

router.get("/google", passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/clima',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }), (req, res) => {
        res.redirect("/oAuth/success");
    });

router.get('oAuth/success', (req, res) => {
    res.status(200).json({success: true});
})


// router.get('/auth/facebook',
//     passport.authenticate('facebook'));
// router.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         successRedirect: '/home',
//         failureRedirect: '/login'
//     }));

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/home', userVerification)

module.exports = router;



