const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { GetUserSettings, SetUserSettings } = require("../Controllers/UserController");
const router = require("express").Router();

router.post("/private-request", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/home", SetUserSettings);
router.get("/user-data", GetUserSettings);

module.exports = router;



