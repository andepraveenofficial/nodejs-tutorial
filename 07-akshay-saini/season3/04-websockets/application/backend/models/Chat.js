const mongoose = require("mongoose");

const messasgeSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			require,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const chatSchema = new mongoose.Schema({
	participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	senderId: {},
	receiverId: {},
	messages: [messasgeSchema],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = { Chat };
