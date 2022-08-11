const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const userMulter = require("../middleware/userMulter");
const registerValidation = require('../middleware/registerValidation');
const loginValidation = require('../middleware/loginValidation')
router.get("/register", mainControllers.register);
//aca guardo el registro del usuario, uso 2 middlewares multer y validations (q tiene q ser un array el cual esta guardado en la const validations)
router.post("/register",userMulter.single('userImage'), //registerValidation ,
mainControllers.userStore);


router.get("/login", mainControllers.login);
//router.post("/login", mainControllers.processLogin);
module.exports = router;