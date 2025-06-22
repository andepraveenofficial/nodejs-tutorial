const socket = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = ({ userId, targetUserId }) => {
	return crypto
		.createHash("sha256")
		.update([userId, targetUserId].sort().join("_"))
		.digest("hex");
};

const initializeSocket = (server) => {
	const io = socket(server, {
		cors: {
			origin: "http://localhost:5173",
		},
	});

	io.on("connection", (socket) => {
		// Handle Events
		socket.on("joinChat", ({ userId, targetUserId }) => {
			// const roomId = [userId, targetUserId].sort().join("_"); // uniqueId // set both are getting same room
			const roomId = getSecretRoomId({ userId, targetUserId });
			console.log("Joining Room : " + roomId);
			socket.join(roomId);
		});
		socket.on("sendMessage", ({ userId, targetUserId, text: newMessage }) => {
			// const roomId = [userId, targetUserId].sort().join("_");
			const roomId = getSecretRoomId({ userId, targetUserId });
			console.log({ userId, targetUserId, text: newMessage });

			/* save message to DB*/
			try {
				/*
				let chat = Chat.findOne({
					participants: { $all: [userId, targetUserId] },
				});

				if (!chat) {
					chat = new Chat({
						participants: [userId, targetUserId],
						messages: [],
					});
				}
				chat.messages.push({ senderId: userId, text: newMessage });

				io.to(roomId).emit("messageReceived", {
					userId,
					targetUserId,
					text: newMessage,
				});
				*/
			} catch (err) {
				console.log(err);
			}
		});
		socket.on("disconnect", () => {});
	});
};

module.exports = initializeSocket;
