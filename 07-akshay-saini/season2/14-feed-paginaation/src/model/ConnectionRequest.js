const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema({
  fromUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User", // reference to the user collection // Link between 2 tables
    required:true
  },
  toUserId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  status:{
    type:String,
    required:true,
    enum:{values:["ignored", "interested", "accepted", "rejected"], message:`{VALUE} is incorrect status type`},
  },
  
},
{ timestamps: true });

connectionRequestSchema.pre("save", function(next){
  const connectioRequest = this;
  // check if the fromUserId is same as toUserId
  if (connectioRequest.fromUserId.equals(connectioRequest.toUserId)){
    throw new Error("Cannot send connection request to yourself!")
  }
  next();
})

// connectionRequest.find({fromUserIdd:_id})

// Compound Index
connectionRequestSchema.index({fromUserId:1, toUserId:1})

const ConnectionRequestModel = mongoose.model("ConnectionRequest", connectionRequestSchema);
module.exports = ConnectionRequestModel