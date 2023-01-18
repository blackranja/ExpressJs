const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3, age: 30, wallet: 15 }
        next()
    }
    else {
        res.status(401).send('Unauthorized');
    }
}
module.exports = authorize;