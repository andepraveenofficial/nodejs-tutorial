const mongoose = require("mongoose");
const validator = require("validator");

// 01 Schema
const userSchema = new mongoose.Schema(
  {
    firstName:{
      type: String,
      required: true,
      minLength:5,
      maxLength:20
    },
    lastName: {
      type: String,
    },
    emailId:{
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Email is not valid")
        }
      }
    },
    password:{
      type: String,
      required: true,
      validator(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Enter a Strong Password")
        }
      }
    },
    age:{
      type: Number,
      min: 18
    },
    gender:{
      type: String,
      // Custom Validation
      validate(value){
        if(!["male", "female", "other"].includes(value)){
          throw new Error("Gender data is not valid")
        }
      }
    },
    photoUrl:{
      type: String,
      default:"https://tse1.mm.bing.net/th?id=OIP.F_R5vSp2LEiLzJqaQuB99wAAAA&pid=Api&P=0&h=180",
      validator(value){
        if(!validator.isURL(value)){
          throw new Error("photo URL is not valid")
        }
      }
    },
    about:{
      type:String,
      default:"This is a default about of the user!"
    },
    skills:{
      type: [String, String]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
)

// 02 Apply Schema to table
const UserModel  = mongoose.model("User", userSchema);

module.exports = UserModel
