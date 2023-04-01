const express = require("express");
const router = express.Router();
const usersControler = require("../controllers/usersControler");

router.post("/", usersControler.postUsers);

module.exports = router;
