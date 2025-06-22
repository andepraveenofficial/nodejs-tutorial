const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const users = [
	{ id: 1, name: "Praveen" },
	{ id: 2, name: "Akshay" },
	{ id: 3, name: "Musk" },
];

app.get("/users", (req, res) => {
	res.json(users);
});

app.post("/chat", userAuth, async (req, res) => {
	const { targetUserId } = req.body;
	const { userId } = req.user;
	res.send("Send Chat Messages");
});

/* -----> Socket.io <----- */
const http = require("http");
const initializeSocket = require("./config/socket");
const server = http.createServer(app);
initializeSocket(server);

server.listen(5000, () => {
	console.log("Example app listening on port 5000!");
});
