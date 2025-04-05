const express = require('express');

const app = express();  // It creates the new web-server

app.use(express.json()); // It handles the receive json data from client

/* -----> Middlewares <----- */
// Particular Route Middleware
const authMiddleware = (req,res, next) => {
  const token = "143"
  const isAuthorized = token === "123"
  if (isAuthorized) {
    next();
  } else {
    res.status(401).send("Not Authorized");
  }
}

/* -----> Routes <----- */

app.get("/admin/getAllUserData", authMiddleware, (req, res, next) => {
  console.log("getAllData");
  res.status(200).send("Fetched AllUserData");
})

app.get("/admin/deleteUser", authMiddleware, (req, res, next) => {
  console.log("deleteUser");
  res.status(200).send("Deleted User");
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});