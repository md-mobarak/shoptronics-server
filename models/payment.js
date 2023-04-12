const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  cartIds: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
});
const Payments = mongoose.model("Payments", PaymentSchema);
module.exports = Payments;
