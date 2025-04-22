const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../model/User");
const authRouter = express.Router();
// const router = express.Router();

/*
// Same
router.use();
*/

// 01 Signup
authRouter.post("/signup", async (req, res) => {

  try{
  // validation of data
  validateSignUpData(req)

  // Encrypt the Password
  const {password, firstName, lastName, emailId} = req.body;
  const passwordHash = await bcrypt.hash(password, 10)

  console.log(req.body);
  const user = new User({
    firstName, lastName, emailId, password:passwordHash
  });

    const result = await user.save();
    console.log(result);
    res.send("user added successfully")
  }
  catch(err){
    res.status(400).send("Error saving the user:" + err.message)
  }
  
})

// 02 Login
authRouter.post("/login", async (req, res) => {
  const {emailId, password} = req.body;
  try{
    const user = await User.findOne({emailId});
    if (!user){
      // res.status(404).send("User Not Found"); // this is database Information Leakage to attackers
      res.status(404).send("Invalid Credentials"); // this is Information Leakage
    }
    else{
      // const isMatch = await bcrypt.compare(password, user.password);  // move to mongoose handler methods
      const isMatch = await user.validatePassword(password);
      if (isMatch){

        // Create a JWT Token
        // Add the token to cookie and send response back to the user
        // const token = await jwt.sign({_id:user._id}, "mysecretkey", {expiresIn:"1d"})  // this code move to mongoose handler methods
        // res.cookie("token", token)

        const token = await user.getJWT();
        res.cookie("token", token, {expires: new Date(Date.now() + 24*60*60*1000)}) // Cookie Expires in 1 day
        res.send("Login Success")
      }
      else{
        res.status(401).send("Invalid Password")
      }
    }
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})

// 03 Logout
authRouter.get("/logout", (req, res) => {
  // res.clearCookie("token");
  /*
  res.cookie("token", null, {expires: new Date(Date.now())});
  res.send("Logout Success")
  */

  res
  .cookie("token", null, {expires: new Date(Date.now())})
  .send("Logout Success")

})

module.exports = authRouter;
// module.exports = router;