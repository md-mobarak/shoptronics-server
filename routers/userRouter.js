const express = require("express");
const router = express.Router();
const usersControler = require("../controllers/usersControler");

router.put("/:email", usersControler.putUsers);

module.exports = router;
