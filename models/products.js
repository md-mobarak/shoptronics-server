const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a product name"],
    trim: true,
    unique: [true, "name is must be unique"],
    minLength: [3, "please, name at least 3 characters"],
    maxLength: [100, "name is too large"],
  },
  imgUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },
  description: {
    type: String,
    required: [true, "please provide a description"],
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "price can't be negative "],
  },
  status: {
    type: String,
    enum: {
      values: ["in-stock,out-of-stock,descontinued"],
      message: "status can't be {VALUE}",
    },
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  subCategories: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
