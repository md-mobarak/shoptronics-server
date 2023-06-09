const cart = require("../models/cart");

const postCart = async (req, res) => {
  try {
    const carts = await cart.Cart.create(req.body);
    res.status(200).json({
      status: "success",
      carts: carts,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
      log: console.log(err.message),
    });
  }
};

const getAllCart = async (req, res, next) => {
  try {
    const carts = await cart.Cart.find();
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
    const allCart = await cart.Cart.find({ email: req.params.email });
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
    const deleteItem = await cart.Cart.findByIdAndDelete(req.params.id);
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
const updateCart = async (req, res) => {
  try {
    const { quantity, _id, totalPrice } = req.body;
    const updateQuantity = await cart.Cart.findByIdAndUpdate(
      { _id: _id },
      { quantity, totalPrice },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      updateQuantity: updateQuantity,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};
const updateCartWithEmail = async (req, res) => {
  try {
    const email = req.params.email;
    console.log("Email:", email);
    const paid = req.body.paid;
    const transactionId = req.body.transactionId;

    const result = await cart.Cart.updateMany(
      { email },
      { $set: { paid, transactionId } },
      { new: true }
    );
    console.log(result);
    res.json({ updatedCount: result.nModified });
  } catch (error) {
    // Handle error
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postCart,
  getCartWithEmail,
  getAllCart,
  deleteCart,
  updateCart,
  updateCartWithEmail,
};
