const router = require('express').Router()
const verify = require('./privateRoutes')
const User = require('../model/User')
router.delete('/', verify, async (req, res) => {
    const user = await User.
        res.send(user);
})
module.exports = router