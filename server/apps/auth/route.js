const express = require('express');
const controller = require('./controller');
const { loginValidations, registerValidations } = require('./validations');

const router = express.Router();

router.post('/login', loginValidations, controller.login);
router.post('/register', registerValidations, controller.register);

module.exports = router;
