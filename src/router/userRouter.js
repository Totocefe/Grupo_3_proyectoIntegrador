const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMulter = require("../middleware/userMulter");
const registerValidation = require('../middleware/registerValidation');
const loginValidation = require('../middleware/loginValidation');


router.get("/register", userController.register);
//aca guardo el registro del usuario, uso 2 middlewares multer y validations (q tiene q ser un array el cual esta guardado en la const validations)
router.post("/register",userMulter.single('userImage'), registerValidation ,
userController.userStore);

router.get("/profile/:id", userController.profile);

router.get("/editUser/:id", userController.edit);
router.put("/editUser/:id",userMulter.single('userImage'), registerValidation , userController.update);

router.get("/login", userController.login);
router.post("/login",loginValidation, userController.processLogin);
module.exports = router;