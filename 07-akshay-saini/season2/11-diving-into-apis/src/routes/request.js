const express = require("express");
const { userAuth } = require("../middlewares/auth");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  console.log("Sending Connection Request");
  const user = req.user;
  res.send(user.firstName + " " + "Sent the connection request")
  return;
})

module.exports = requestRouter