const {body} = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Este campo es obligatorio').isLength({min:2}).withMessage('Tiene que tener al menos 2 caracteres').bail(),
    body('description').notEmpty().withMessage('Este campo es obligatorio').isLength({min:15}).withMessage('Tiene que tener al menos 15 caracteres').bail(),
]