const express = require("express");
const { userAuth } = require("../middlewares/auth");
const User = require("../model/User");
const { validateEditProfileData } = require("../utils/validation");
const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
	/*
  const cookies = req.cookies
  const {token} = cookies
  // validate my token

  console.log(cookies);
  const decodedPayload = await jwt.verify(token, "mysecretkey");

  console.log(decodedPayload);

  const {_id} = decodedPayload;
  console.log("Logged in user is", _id);

  const user = await User.findById(_id);
  */
	const user = req.user;
	console.log(user);
	res.send(user);
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
	const user = req.user;
	console.log(user);

	try {
		// Validate client data
		const isValid = validateEditProfileData(req);

		if (!isValid) {
			throw new Error("Invalid data");
			// res.status(400).send("Invalid data");
			return;
		}

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    })
    console.log(loggedInUser);

    await loggedInUser.save();

    // res.send("Profile Updated Successfully");
    res.json({message:`${loggedInUser.firstName} Profile Updated Successfully`, data:loggedInUser})
    return;

	} catch (err) {
		res.status(400).send("ERROR : " + err.message);
	}

	res.send(user);
});

module.exports = profileRouter;
