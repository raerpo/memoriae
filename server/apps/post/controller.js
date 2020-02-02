const validationHandler = require('../../middlewares/validationHandler');

const index = (req, res) => {
    res.send({message: 'Hello from post'});
}

const store = (req, res, next) => {
    try {
        validationHandler(req);
        res.send({message: `user created with ${req.body.email} - ${req.body.password}`});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    index,
    store
}