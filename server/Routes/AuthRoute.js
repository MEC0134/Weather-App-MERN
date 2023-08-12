const { Signup, Login } = require("../Controllers/AuthController");
const {SetUserSettings} = require("../Middlewares/SetSettingsMiddleware");
const {GetUserSettings} = require("../Middlewares/GetSettingsMiddleware");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/choice", userVerification);
router.post("/home", SetUserSettings);

module.exports = router;



