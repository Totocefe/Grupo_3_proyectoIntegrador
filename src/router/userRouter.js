const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const userMulter = require("../middleware/userMulter");
//aca solo requiero la funcion body del paquete de express validator q es lo q voy a usar para hacer las validaciones
const {body} = require('express-validator');
// estas son las validaciones q quiero a aplicar
const validations=[
    body('firstName').notEmpty().withMessage('').bail,
    body('lastName').notEmpty().withMessage('').bail,
    body('email').isEmail().withMessage('').bail,
    body('password').notEmpty().withMessage('').bail,
    body('confirmPassword').notEmpty().withMessage('').bail,
]

router.get("/register", mainControllers.register);
//aca guardo el registro del usuario, uso 2 middlewares multer y validations (q tiene q ser un array el cual esta guardado en la const validations)
router.post("/register",userMulter.single('userImage') ,mainControllers.userStore);


router.get("/login", mainControllers.login);

module.exports = router;