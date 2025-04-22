const express = require('express');
const cookieParser = require("cookie-parser")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const connectDB = require("./config/mongodb")
const User = require("./model/User");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const app = express();  // It creates the new web-server

// This middleware activate for all the routes
app.use(express.json()); // It handles the receive json data from client
app.use(cookieParser()) // reads the cookies

/* -----> APIs <----- */

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/request", requestRouter);
app.use("/user", userRouter)


connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

