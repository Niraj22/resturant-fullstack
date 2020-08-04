const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const verify = require('./privateRoutes')
var jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require("../validation")
router.post('/register', verify, async (req, res) => {
    //validate before making user
    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    //check user is already in db
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exists')
    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: user._id })
    } catch (error) {
        res.status(400).send(err)
    }
})
//login method 
router.post('/login', async (req, res) => {
    //validate beforeloggin in
    const { error } = loginValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.send({ "message": 'Email doesn\'t match' })
    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.send({ "message": 'password doesn\'t match' })
    //create and assign a token
    const token = jwt.sign({ __id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})
module.exports = router
