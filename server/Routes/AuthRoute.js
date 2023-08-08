const { Signup, Login } = require("../Controllers/AuthController");
const {UserChoice} = require("../Controllers/UserChoiceController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/choice', userVerification);

module.exports = router;



