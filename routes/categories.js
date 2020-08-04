const router = require('express').Router()
const Category = require('../model/Categories')
const verify = require('./privateRoutes')
router.post('/create', verify, async (req, res) => {
    //check category is already in db
    const categoryExist = await Category.findOne({ categoryName: req.body.categoryName })
    if (categoryExist) return res.status(400).send('category already exists')

    //create a new category
    const category = new Category({
        categoryName: req.body.categoryName
    })
    try {
        const savedCategory = await category.save()
        res.send(savedCategory)
    } catch (error) {
        res.status(400).send(err)
    }
})
router.get('/all', async (req, res) => {
    const allCategories = await Category.find();
    res.send(allCategories);
})
module.exports = router