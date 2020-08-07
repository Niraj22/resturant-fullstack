const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
//Item model
const Category = require('../../models/Category')
// @route GET api/items
// @desc get all items
// @access public
router.get('/', auth, (req, res) => {
    Category.find()
        .then(category => res.json(category))
})
// @route post api/items
// @desc post to items
// @access privare
router.post('/', auth, (req, res) => {
    const category = new Category({
        category: req.body.category
    })
    category.save()
        .then(category => res.json(category))
})
// @route delete api/items
// @desc delete an  item
// @access private
router.delete('/:id', auth, (req, res) => {
    const category = Category.findById(req.params.id)
        .then(category => category.remove()).then(() => res.json({ success: true }))
        .catch(() => res.status(404).json({ success: false }))
})
module.exports = router