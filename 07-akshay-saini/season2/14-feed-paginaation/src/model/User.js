const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
      enum:{values:["male", "female", "other"], message:`{VALUE} is incorrect gender type`},
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

// mongoose helper methods
// write here only normal functions, otherwise will not work
userSchema.methods.getJWT = async function(){
  const user = this
  const token = await jwt.sign({_id:user._id}, "mysecretkey", {expiresIn:"1d"})
  return token
}

userSchema.methods.validatePassword = async function(passwordInputByUser){
  const user = this
  const passwordHash = user.password
  const isPasswordMatch = await bcrypt.compare(passwordInputByUser, passwordHash)
  return isPasswordMatch
}



// 02 Apply Schema to table
const UserModel  = mongoose.model("User", userSchema);

module.exports = UserModel
