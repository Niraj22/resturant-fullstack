const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../../middleware/auth')
//User model
const User = require('../../models/User')
// @route POST api/auth
// @desc Authenticate user
// @access public
router.post('/', (req, res) => {
    const { email, password } = req.body
    //simple validation
    if (!email || !password) {
        return res.status(400).json({ message: "please enter all fields" })
    }
    //check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) { return res.status(400).json({ message: "user doesn't exist" }) }

            //1 compare hash and password => validate it
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ message: "invalid credentials" })
                    jwt.sign({
                        id: user.id
                    },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })

        })
})
// @route GET api/auth/user
// @desc get user data
// @access private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
})
// @route GET api/auth/user
// @desc get user data
// @access private
router.get('/user/all', auth, (req, res) => {
    User.find()
        .select('-password')
        .then(user => res.json(user))
})
module.exports = router