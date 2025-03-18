const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.hashPassword = async (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            return next(err);
        }
        req.body.password = hash;
        console.log("your hashed password", hash);
        next();
    });
}