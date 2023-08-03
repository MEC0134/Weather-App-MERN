const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const passport = require("passport");
const router = require("express").Router();

router.get("/auth/google",
    passport.authenticate('google', { scope: ['profile'] }));
router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/login'
    }));
router.get('/auth/facebook',
    passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/home',
        failureRedirect: '/login'
    }));

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/home', userVerification)

module.exports = router;



