const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../apps/auth/model');

const { ExtractJwt, Strategy } = passportJWT;
const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = () => {
    const strategy = new Strategy(options, async (payload, done) => {
        const user = await User.findById(payload.id);
        if (!user) return done(new Error('User not found'), null);
        return done(null, user);
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', {session: false})
        }
    }
}