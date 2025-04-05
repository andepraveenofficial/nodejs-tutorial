const express = require('express');

const app = express();  // It creates the new web-server

app.use(express.json()); // It handles the receive json data from client

app.get("/user", (req, res, next) => {
  console.log("First Route Handler");
  next()
})

app.get("/user", (req, res, next) => {
  console.log("Second Route Handler");
  next()
})

app.get("/user", (req, res, next) => {
  console.log("Third Route Handler");
  res.send("Response from the Third Route Handler");
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});