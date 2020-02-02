const { check } = require('express-validator');

const validations = [
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
]

module.exports = validations;