const mongoose = require("mongoose")
const categoriesSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        min: 10,
        max: 255
    }
})

module.exports = mongoose.model('Category', categoriesSchema)