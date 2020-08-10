const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const auth = require('../../middleware/auth')
//User model
const User = require('../../models/User')
const e = require('express')
// @route POST api/users
// @desc Register new user
// @access public
router.post('/', auth, (req, res) => {
    const { name, email, password } = req.body
    //simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: "please enter all fields" })
    }
    //check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) { return res.status(400).json({ message: "user already registered" }) }
            const newUser = new User({
                name, email, password
            })
            //hash the passwords
            //1 create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    const { _id } = newUser
                    newUser.save()
                        .then(() => {
                            User.findById(_id).select('-password')
                                .then((retUser) => res.json(retUser))
                        })
                        .catch(() => res.status(404).json({ success: false }))

                })
            })
        })
})
// @route delete api/items
// @desc delete an  item
// @access private
router.delete('/:id', auth, (req, res) => {
    const user = User.findById(req.params.id)
        .then(user => user.remove()).then(() => res.json({ success: true }))
        .catch(() => res.status(404).json({ success: false }))
})

module.exports = router