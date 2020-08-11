const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
//Item model
const Category = require('../../models/Category')
// @route GET api/items
// @desc get all items
// @access public
router.get('/', (req, res) => {
    Category.find()
        .then(category => res.json(category))
})
// @route post api/items
// @desc post to items
// @access privare
router.post('/', auth, (req, res) => {
    const { category } = req.body
    Category.findOne({ category })
        .then(ress => {
            if (ress) { return res.status(400).json({ message: "category already in the inventory" }) }
            const newCat = new Category({
                category
            })
            newCat.save()
                .then(cat => res.json(cat))
                .catch(() => res.status(404).json({ success: false }))
        })
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