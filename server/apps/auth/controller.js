const jwt = require('jwt-simple');
const User = require('./model');
const validationHandler = require('../../middlewares/validationHandler');

const login = async (req, res, next) => {
    try {
        validationHandler(req);
        const { email, password } = req.body;
        user = await User.findOne({ email }).select('+password');
        if (!user) {
            const error = new Error('email or password are invalid');
            error.statusCode = 401;
            throw error;
        }
        const isPasswordValid = await user.checkPassword(password);
        if (!isPasswordValid) {
            const error = new Error('email or password are invalid');
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
        res.send({ token, user });
    } catch (error) {
        next(error);
    }
}

const register = async (req, res, next) => {
    try {
        validationHandler(req);
        const { name, email, password } = req.body;
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            const error = new Error('Email already used');
            error.statusCode = 403;
            throw error;
        }
        
        const user = await new User();
        user.name = name;
        user.email = email;
        user.password = await user.encryptPassword(password);
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    login,
    register
}