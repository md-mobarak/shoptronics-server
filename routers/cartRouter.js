const express = require("express");
const router = express.Router();
const cartControler = require("../controllers/cartControler");

router.post("/", cartControler.postCart);
router.get("/", cartControler.getAllCart);
router.get("/:email", cartControler.getCartWithEmail);
router.delete("/:id", cartControler.deleteCart);
router.put("/:id", cartControler.updateCart);

module.exports = router;
