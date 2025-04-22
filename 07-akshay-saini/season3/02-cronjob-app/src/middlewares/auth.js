const jwt = require("jsonwebtoken");
const User = require("../model/User");

const userAuth = async (req, res, next) => {

try {
    const cookies = req.cookies;
    console.log(cookies);
    const {token} = cookies;

    if (!token){
      throw new Error("Token Not Found");
    }
  
    const decodedData = await jwt.verify(token, "mysecretkey")
    const {_id} = decodedData;
  
    const user = await User.findById(_id);
  
    if (!user){
      throw new Error("Credentials Not Correct")
    }
  
    req.user = user;
    next();
}
catch(err){
  res.status(400).send("something went wrong", err.message);
  return;
}

}

module.exports = {
  userAuth
}