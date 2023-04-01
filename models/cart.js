const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a product name"],
    trim: true,
    unique: [true, "name is must be unique"],
    minLength: [3, "please, name at least 3 characters"],
    maxLength: [100, "name is too large"],
  },
  imgURL: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },

  quantity: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
