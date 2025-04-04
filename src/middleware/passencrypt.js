import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    req.hashedPassword = hash;
    console.log("your hashed password is over here : ", hash);
    next();
  });
};

export default hashPassword;
