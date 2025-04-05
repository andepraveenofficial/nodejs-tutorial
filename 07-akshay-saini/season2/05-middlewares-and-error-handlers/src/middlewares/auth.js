const adminMiddleware = (req,res, next) => {
  console.log("getting admin auth checked");
  const token = "1233"
  const isAuthorized = token === "123"

  if (!isAuthorized) {
    res.status(401).send("Not Authorized");
    return;
  }

  next();
}

const userMiddleware = (req,res, next) => {
  console.log("getting user auth checked");
  const token = "123"
  const isAuthorized = token === "123"

  if (!isAuthorized) {
    res.status(401).send("Not Authorized");
    return;
  }

  next();
}

module.exports = {
  adminMiddleware,
  userMiddleware
}