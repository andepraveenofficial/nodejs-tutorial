const Razorpay = require("razorpay");
const { keyId, keySecret } = require("../envfile");
var instance = new Razorpay({
	key_id: keyId, // "YOUR_KEY_ID",
	key_secret: keySecret, // "YOUR_KEY_SECRET",
});

module.exports = instance;
