const payment = require("../models/payment");

const postPayment = async (req, res) => {
  try {
    const payments = await payment.create(req.body);
    res.status(200).json({
      status: "success",
      payments: payments,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
      log: console.log(err.message),
    });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await payment.find(req.body);
    // console.log(cartIds);
    res.status(200).json({
      status: "success",
      payments: payments,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
      log: console.log(err.message),
    });
  }
};

module.exports = {
  postPayment,
  getPayments,
};
