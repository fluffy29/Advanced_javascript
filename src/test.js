const test = () => {
    console.log("test");
}

module.exports = test;

const test = require ("./test");

app.use((req, res, next) => {
    test()
    const now = Date.now();
    req.requestTime = now
    next();
});