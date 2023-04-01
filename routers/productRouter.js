const express = require("express");
const router = express.Router();
const productControler = require("../controllers/productControler");

router.post("/", productControler.postProduct);
router.get("/", productControler.getProducts);

module.exports = router;
