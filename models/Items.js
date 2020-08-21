const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  homeDelivery: {
    type: Boolean,
    default: false,
    required: true,
  },
  takeOut: {
    type: Boolean,
    default: false,
    required: true,
  },
  filename: {
    required: true,
    type: String,
  },
  fileId: {
    required: true,
    type: String,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});
module.exports = Item = mongoose.model("item", ItemSchema);
