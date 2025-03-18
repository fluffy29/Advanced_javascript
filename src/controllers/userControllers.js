exports.userLogin = (req, res) => {
    res.send("User login route");
}

exports.userSignUp = (req, res) => {
    const { firstName, email} = req.body
    const hashedPassword = req.body.password
    res.json({
        firstName,
        email,
        hashedPassword,
        _id: "randomId4567",
    })
}