const { check } = require('express-validator');

const loginValidations = [
    check('email').isEmail(),
    check('password').exists()
]

const registerValidations = [
    check('name').isLength({ min: 2, max: 50}),
    check('email').isEmail(),
    check('password').exists()
]

module.exports = {
    loginValidations,
    registerValidations
};