//aca solo requiero la funcion body del paquete de express validator q es lo q voy a usar para hacer las validaciones
const {body} = require('express-validator');
// estas son las validaciones q quiero a aplicar
module.exports=[
    body('firstName').notEmpty().withMessage('Este campo no puede estar vacío').bail,
    body('lastName').notEmpty().withMessage('Este campo tiene que ser un email').bail,
    body('email').isEmail().withMessage('Este campo no puede estar vacío').bail,
    body('password').notEmpty().withMessage('Este campo no puede estar vacío').bail,
    
]

