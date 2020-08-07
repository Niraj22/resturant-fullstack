const config = require('config')
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token')
    //check for token
    if (!token) {
        return res.status(401).json({ message: "no token,authorization denied" })
    }
    try {
        //verify tokern
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        //add user from payload
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({ message: "token is not valid" })
    }

}

module.exports = auth