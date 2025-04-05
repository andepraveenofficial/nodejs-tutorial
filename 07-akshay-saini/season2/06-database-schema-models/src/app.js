const express = require('express');
const connectDB = require("./config/mongodb")
const User = require("./model/User")
const app = express();  // It creates the new web-server

/* -----> APIs <----- */
app.post("/signup", async (req, res) => {
  const userObj = {
  firstName:"Praveen",
  lastName:"Ande",
  emailId:"praveenande2023@gmail.com",
  password:"password123",  
  age:28,
  gender:"male"
  }

  // Creating new Instance of the User model
  // 03 match userObj with userSchema
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

connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


