//aca solo requiero la funcion body del paquete de express validator q es lo q voy a usar para hacer las validaciones
const {body} = require('express-validator');
// estas son las validaciones q quiero a aplicar
registerValidation =[
    body('first_name').notEmpty().withMessage('Este campo no puede estar vacío').isLength({min:2}).withMessage('Debe tener mas de 2 caracteres').bail(),
    body('last_name').notEmpty().withMessage('Este campo no puede estar vacío').isLength({min:2}).withMessage('Debe tener mas de 2 caracteres').bail(),
    body('email').notEmpty().withMessage('Este campo no puede estar vacío').isEmail().withMessage(' Este campo tiene que ser un email').bail(),
    body('password').notEmpty().withMessage('Este campo no puede estar vacío').isLength({min:8}).withMessage('Debe tener mas de 8 caracteres').bail()
    
]

module.exports = registerValidation;