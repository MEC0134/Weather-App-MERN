const { Signup, Login } = require("../Controllers/AuthController");
const {AppSettings} = require("../Middlewares/SettingsMiddleware");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/choice", userVerification);
router.post("/home", AppSettings);

module.exports = router;



