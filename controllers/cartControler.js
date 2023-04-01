const cart = require("../models/cart");

const postCart = async (req, res) => {
  try {
    const carts = await cart.create(req.body);
    res.status(200).json({
      status: "success",
      carts: carts,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};

const getAllCart = async (req, res, next) => {
  try {
    const carts = await cart.find();
    res.status(200).json({
      status: "success",
      carts: carts,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};

const getCartWithEmail = async (req, res) => {
  try {
    const allCart = await cart.find({ email: req.params.email });
    res.status(200).json({
      status: "success",
      allCart: allCart,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};
const deleteCart = async (req, res) => {
  try {
    const deleteItem = await cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      deleteCart: deleteItem,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};

module.exports = {
  postCart,
  getCartWithEmail,
  getAllCart,
  deleteCart,
};
