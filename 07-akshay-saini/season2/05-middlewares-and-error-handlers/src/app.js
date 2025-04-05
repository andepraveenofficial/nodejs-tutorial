const express = require('express');

const app = express();  // It creates the new web-server

/*

// Error Message and files data sent to client
app.get("/getUserData", (req, res) => {
  console.log("Request get method from /user Route");
  throw new Error("Something went wrong")
  res.send("Fetched UserData");
})

*/

// If you forget to write try/catch, it automatically triggers the error middleware
app.get("/getUserData", (req, res) => {
  console.log("Request get method from /user Route");
  // try{
    throw new Error("Something went wrong")
    res.send("Fetched UserData");
  // }catch(err){
  //     res.status(500).send("Some error contact support team")
  // }
})

// wildcard -> It matches the all the routes
// Error Middleware -> 4 parameters -> then recognize the error middleware
app.use("/", (err, req, res, next) => {
  if (err){
    res.status(500).send("something went wrong")
  }
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});