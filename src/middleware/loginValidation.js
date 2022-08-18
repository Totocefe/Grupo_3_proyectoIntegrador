const {body} = require('express-validator');

module.exports = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').isEmail().withMessage('Tiene que ser un email').bail(),
    body('password').notEmpty().withMessage('Este campo es obligatorio')
]