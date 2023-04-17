const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a product name"],
    trim: true,
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
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },

  quantity: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },
  paid: {
    type: Boolean,
  },
  transactionId: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = {
  Cart,
};
