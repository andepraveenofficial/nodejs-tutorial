const express = require("express")
const userRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const connectionRequest = require("../model/ConnectionRequest");
const { connection } = require("mongoose");

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

userRouter.get("/feed", userAuth, async (req, res) => {
  try{
    /*
    // User should see all the user cards
    0. his own card
    1. his connections
    2. ignored people
    3. already sent the connection request
    */
   const loggedInUser = req.user;

   // "/feed?page=1&limit=10"
   const page = parseInt(req.query.page) || 1;
   let limit = parseInt(req.query.limit) || 10;

   /*
   skip = (page-1)*limit
   */

   const skip = (page-1)*limit;

   /*
   Control the database usage
   Problem : Fetching lot of data at once
   Hacker has opportunity to stress the database -> Database will freeze
   */

   limit = limit > 50 ? 50 : limit

   // FInd all connection requests (sent + received)
   const connectionRequest = await connectionRequest.find({
    $or:[
      {fromUserId:loggedInUser._id},
      {toUserId:loggedInUser._id}
    ]
   }).select("fromUserId toUserId").populate("fromUserId", "firstName").populate("toUserId", "firstName");

   const hideUsersFromFeed = new Set();
   connectionRequest.forEach((req) => {
     hideUsersFromFeed.add(req.fromUserId._id.toString());
     hideUsersFromFeed.add(req.toUserId._id.toString());
   })

   console.log(hideUsersFromFeed);
   const USER_SAFE_DATA = ["firstName", "lastName", "photoUrl", "about", "skills"]

   const users = await User.find({
     $and:[
      {_id:{$nin:Array.from(hideUsersFromFeed)}}, 
      {_id:{$ne:loggedInUser._id}}
    ]
   }).select(USER_SAFE_DATA).skip(skip).limit(limit);

   res.send(connectionRequest);
  }
  catch(err){
   res.status(400).json({message:err.message})
  }
})

module.exports = userRouter