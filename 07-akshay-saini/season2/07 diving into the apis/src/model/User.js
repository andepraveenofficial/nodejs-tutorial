const mongoose = require("mongoose");

// 01 Schema
const userSchema = new mongoose.Schema(
  {
    firstName:{
      type: String,
    },
    lastName: {
      type: String,
    },
    emailId:{
      type: String,
    },
    password:{
      type: String,
    },
    age:{
      type: Number,
    },
    gender:{
      type: String,
    }
  }
)

// 02 Apply Schema to table
const UserModel  = mongoose.model("User", userSchema);

module.exports = UserModel