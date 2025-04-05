const express = require('express');
const cookieParser = require("cookie-parser")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const connectDB = require("./config/mongodb")
const User = require("./model/User");
const { validateSignUpData } = require('./utils/validation');
const app = express();  // It creates the new web-server

// This middleware activate for all the routes
app.use(express.json()); // It handles the receive json data from client
app.use(cookieParser()) // reads the cookies

/* -----> APIs <----- */
// 01 Signup
app.post("/signup", async (req, res) => {

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

// 02 Get User by email from database
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;

    try{
    const user = await User.find({emailId:userEmail})
    

    if (user.length === 0){
    res.status(404).send("User Not Found")
    }
    else{
      res.send(user);
    }

    }
    catch(err){
     res.status(400).send("something went wrong")
    }
})


// 03 Get All Users from database
app.get("/feed", async (req, res) => {
  try{
    const users = await User.find({});
    res.send(users)
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})

// 04 Delete
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try{
    // const user = await User.findByIdAndDelete({_id:userId});
    await User.findByIdAndDelete(userId);  // shorthand
    res.send("User Deleted Successfully")
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})


// 05 Patch -> Update data of the User
app.patch("/user", async (req, res) => {
  const userId = req.query.userId
  const data = req.body;
  console.log(data);

   
  try{
    // Allowed Updated
  // API Level Validation
  const ALLOWED_UPDATES = ["photoUrl", "about", "age", "gender", "skills"]
  const isUpdateAllowed = Object.keys(data).every((update) => ALLOWED_UPDATES.includes(update))
 
    if(!isUpdateAllowed){
      throw new Error("Update is not allowed")
    }

    if (data?.skills.length > 10){
      throw new Error("Skills should not be more than 10")
    }

    // mongodb ignores the data that not matched with mongoose schema
    await User.findByIdAndUpdate({_id:userId}, data, {runValidators:true});
    res.send("User Updated Successfully")
  }
  catch(err){
    res.status(400).send("Update Failed "  + err.message)
  }
})


// 06 Login
app.post("/login", async (req, res) => {
  const {emailId, password} = req.body;
  try{
    const user = await User.findOne({emailId});
    if (!user){
      // res.status(404).send("User Not Found"); // this is database Information Leakage to attackers
      res.status(404).send("Invalid Credentials"); // this is Information Leakage
    }
    else{
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch){

        // Create a JWT Token
        // Add the token to cookie and send response back to the user
        const token = await jwt.sign({_id:user._id}, "mysecretkey")
        res.cookie("token", token)
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

app.get("/profile", async (req, res) => {
  const cookies = req.cookies

  const {token} = cookies
  // validate my token

  console.log(cookies);
  const decodedPayload = await jwt.verify(token, "mysecretkey");

  console.log(decodedPayload);

  const {_id} = decodedPayload;
  console.log("Logged in user is", _id);

  const user = await User.findById(_id);
  console.log(user);
  res.send("Profile")
})

connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

