const users = require("../models/users");

const postUsers = async (req, res) => {
  try {
    const user = await users.create(req.body);
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "file",
      err: err.message,
    });
  }
};

module.exports = {
  postUsers,
};
