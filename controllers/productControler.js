const Product = require("../models/products");

const postProduct = async (req, res, next) => {
  const singleProduct = new Product(req.body);
  try {
    const result = await singleProduct.save();
    res.status(201).json(result);
  } catch (error) {
    next({ message: "Error creating Product", status: 400 });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    next({ message: "Error creating product", status: 400 });
  }
};

module.exports = {
  postProduct,
  getProducts,
};
