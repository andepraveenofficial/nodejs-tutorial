const validator = require("validator");

const validateSignUpData = (req) => {
  const {firstName, lastName, emailId, password} = req.body;

  if (!firstName || !lastName){
    throw new Error("Name is not valid!")
  }
  else if(firstName.length < 5 || firstName.length > 50){
    throw new Error("FirstName should be 4-50 characters")
  }
  else if (!validator.isEmail(emailId)){
    throw new Error("Email is not valid")
  }
  else if(!validator.isStrongPassword(password)){
    throw new Error("Password is not strong enough praveen")
  }
}


const validateEditProfileData = (req) => { 
  const allowedEditFields = ["firstName", "lastName", "emailId", "photoUrl", "gender", "age", "about", "skiils"]
  const isEditValid = Object.keys(req.body).every((field) => allowedEditFields.includes(field));
  return isEditValid;

}
module.exports = {validateSignUpData, validateEditProfileData}