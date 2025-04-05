const express = require('express');
const connectDB = require("./config/mongodb")
const User = require("./model/User")
const app = express();  // It creates the new web-server

// This middleware activate for all the routes
app.use(express.json()); // It handles the receive json data from client  

/* -----> APIs <----- */
// 01 Signup
app.post("/signup", async (req, res) => {

  console.log(req.body);
  const user = new User(userObj);

  try{
    const result = await user.save();
    console.log(result);
    res.send("user added successfully")
  }
  catch(err){
    res.status(400).send("Error saving the user:" + err.message)
  }
  
})

// 02 Get User by email from database
app.get("user", async (req, res) => {
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
app.get("feed", async (req, res) => {
  try{
    const users = await User.find({});
    res.send(users)
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})

// 04 Delete
app.delete("user", async (req, res) => {
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
app.patch("user", async (req, res) => {
  const userId = req.body.userId
  const data = req.body;
  try{
    // mongodb ignores the data that not matched with mongoose schema
    await User.findByIdAndUpdate({_id:userId.userId}, data);
    res.send("User Updated Successfully")
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})

connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


