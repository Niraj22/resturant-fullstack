const router = require('express').Router()
const verify = require('./privateRoutes')
const User = require('../model/User')
router.get('/', verify, async (req, res) => {
    const user = await User.find();
    res.send(user);
})
module.exports = router