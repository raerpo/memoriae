const { check } = require('express-validator');

const addCardValidations = [
    check('question').isLength({ min: 3, max: 100}),
    check('answer').isLength({ min: 3, max: 250})
]

module.exports = {
    addCardValidations
}