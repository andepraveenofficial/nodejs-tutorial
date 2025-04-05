const express = require('express');
const {adminMiddleware, userMiddleware} = require('./middlewares/auth')

const app = express();  // It creates the new web-server

app.use(express.json()); // It handles the receive json data from client

/* -----> Middlewares <----- */

app.use("/admin", adminMiddleware);
// app.use("/user", userMiddleware);



/* -----> Routes <----- */

app.get("/admin/getAllUserData", (req, res) => {
  console.log("getAllData");
  res.status(200).send("Fetched AllUserData");
})

app.get("/admin/deleteUser", (req, res) => {
  console.log("deleteUser");
  res.status(200).send("Deleted User");
})

app.get("/user", userMiddleware, (req, res) => {
  console.log("user");
  res.status(200).send("User");
})

app.get("/user/login", userMiddleware, (req, res) => {
  console.log("user login");
  res.status(200).send("User login");
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});