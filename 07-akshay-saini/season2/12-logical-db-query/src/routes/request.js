const express = require("express");
const { userAuth } = require("../middlewares/auth");
const User = require("../model/User");
const ConnectionRequestModel = require("../model/ConnectionRequest");
const requestRouter = express.Router();

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
  
try{
  const fromUserId = req.user._id;
  const toUserId = req.params.toUserId;
  const status = req.params.status;

  const allowedStatus = ["ignored", "interested"];

  if (!allowedStatus.includes(status)){
    return res.status(400).json({message:"Invalid Status type :" + status});
  }

  const toUser = await User.findById(toUserId);

  if (!toUser){
    return res.status(400).json({message:"User Not Found"});
  }

  // If there is an existing ConnectionRequest
  // Here API fastness purpose create Compound Index on fromUserId and toUserId
  const existingConnectionRequest = await ConnectionRequestModel.findOne({$or:[
   { fromUserId, toUserId}, {fromUserId:toUserId, toUserId:fromUserId}
  ]});

  if (existingConnectionRequest){
    return res.status(400).json({message:"Connection Request Already Exists"});
  }

  const connectionRequest = new ConnectionRequestModel({fromUserId, toUserId, status});
  const data = await connectionRequest.save();

  res.json({
    message:req.user.firstName + " is " + status + " in " + toUser.firstName,
    data
  })

}
catch(err){
  res.status(400).send("ERROR: " + err.message)
}
})

module.exports = requestRouter