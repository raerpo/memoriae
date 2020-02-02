const express = require('express');
const controller = require('./controller');
const validations = require('./validations');

const router = express.Router();

router.get('/', controller.index);
router.post('/', validations, controller.store);

module.exports = router;