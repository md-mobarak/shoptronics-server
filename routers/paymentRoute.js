const express = require("express");
const router = express.Router();
const paymentControler = require("../controllers/paymentControler");

router.post("/", paymentControler.postPayment);
router.get("/", paymentControler.getPayments);

module.exports = router;
