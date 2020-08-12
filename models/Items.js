const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    takeOut: {
        type: Boolean,
        default: false,
        required: true
    }
})
module.exports = Item = mongoose.model('item', ItemSchema)