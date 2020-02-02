const express = require('express');
const { addCard, getCards } = require('./controller');
const { addCardValidations } = require('./validations');
const { authenticate } = require('../../middlewares/authHandler')();

const router = express.Router();

router.get('/', getCards);
router.post('/', authenticate(), addCardValidations, addCard);

module.exports = router;