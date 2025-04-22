const express = require("express")
const userRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const connectionRequest = require("../model/ConnectionRequest");

// Get all the pending connection requests for the loggedIn user
userRouter.get("/requests/received", userAuth, async (req, res) => {
  try{
    const loggedInUser = req.user;
    const connectionRequest = await connectionRequest.find({
      toUserId:loggedInUser._id,
      status:"interested" // pending
    }).populate("fromUserId", ["firstName", "lastName", "photoUrl", "about", "skills"])
    res.json({
      message:"Data fetched successfully",
      data:connectionRequest
    })
  }
  catch(err){
    req.statusCode(400).send("ERROR: " + err.message)
  }
})


userRouter.get("/user/connections", userAuth, async (req, res) => {
  try{
    const USER_SAFE_DATA = ["firstName", "lastName", "photoUrl", "about", "skills"]
    const loggedInUser = req.user;
    const connectionRequest = await connectionRequest.find({
      $or:[{fromUserId:loggedInUser._id, status:"accepted"}, {toUserId:loggedInUser._id, status:"accepted"}]
    }).populate("fromUserId", USER_SAFE_DATA).populate("toUserId", USER_SAFE_DATA)

    const data = connectionRequest.map((row) => {
      if (row.fromUserId._id.equals(loggedInUser._id)){
        return row.toUserId;
      }
      else{
        return row.fromUserId;
      }
    });
    res.json({
      message:"Data fetched successfully",
      data:data
    })
  }
  catch(err){
    req.statusCode(400).send("ERROR: " + err.message)
  }
})

module.exports = userRouter