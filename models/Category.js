const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const CategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Category = mongoose.model('category', CategorySchema)