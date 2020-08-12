const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
//Item model
const Items = require('../../models/Items')
// @route GET api/items
// @desc get all items
// @access public
router.get('/', (req, res) => {
    Items.find()
        .then(items => res.json(items))
})
// @route post api/items
// @desc post to items
// @access privare
router.post('/', auth, (req, res) => {
    const { name, category, slug, price, takeOut } = req.body
    Items.findOne({ name })
        .then(ress => {
            if (ress) { return res.status(400).json({ message: "Item already in the inventory" }) }
            const newItem = new Items({
                name,
                category,
                slug,
                price,
                takeOut
            })
            newItem.save()
                .then(ite => res.json(ite))
                .catch(() => res.status(404).json({ success: false }))
        })
})
// @route delete api/items
// @desc delete an  item
// @access private
router.delete('/:id', auth, (req, res) => {
    const item = Items.findById(req.params.id)
        .then(item => item.remove()).then(() => res.json({ success: true }))
        .catch(() => res.status(404).json({ success: false }))
})
module.exports = router