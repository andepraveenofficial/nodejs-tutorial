# Ref, Populate and Thought Process

### Review Request API

### Note
- Don't start directly write code


### Thought Process
- POST - hacker sends some data randomly your server puts that data into database
- GET - hacker getting some information from the database
- Maintain database very secure

### Connection b/w 2 collections
- Referencing : This is replacing of the joins in sql
```js
  fromUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User", // reference to the user collection // Link between 2 tables
    required:true
  },
```
- Selects data
```js
    const connectionRequest = await connectionRequest.find({
      toUserId:loggedInUser._id,
      status:"interested" // pending
    }).populate("fromUserId", ["firstName", "lastName"])
```

### Select Data
- Send USER_SAFE_DATA