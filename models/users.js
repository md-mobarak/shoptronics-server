const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    trim: true,
    unique: [true, "name is must be unique"],
    minLength: [3, "please, name at least 3 characters"],
    maxLength: [100, "name is too large"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        // Email validation regex pattern
        return /\S+@\S+\.\S+/.test(email);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (password) {
    //     // Password validation regex pattern
    //     return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    //   },
    //   message:
    //     "Password must be at least 8 characters long and contain at least one letter and one number",
    // },
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
