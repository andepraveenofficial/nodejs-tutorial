import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../config/socket";

const Chat = () => {
	const { targetUserId } = useParams();
	const [messages, setMessages] = useState([]);
	const [userId, setUserId] = useState(null);
	const [newMessage, setNewMessage] = useState("");
	console.log(targetUserId);

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		setUserId(userId);
		const socket = createSocketConnection();
		// As soon as the page loaded, the socket connetion is made and joinChat event is emitted
		socket.emit("joinChat", { userId: userId, targetUserId });

		socket.on("messageReceived", ({ userId, targetUserId, text }) => {
			console.log("messageReceived", { userId, targetUserId, text });
			setMessages((prevMessages) => [...prevMessages, { text, userId }]);
		});

		return () => {
			socket.disconnect();
		};
	}, [userId, targetUserId]);

	const sendMessage = () => {
		const socket = createSocketConnection();
		socket.emit("sendMessage", { userId, targetUserId, text: newMessage });
		setNewMessage("");
	};

	return (
		<div style={{ border: "2px solid green" }}>
			<h1>Chat</h1>
			<hr />
			<div>
				<h2>Display Messages</h2>
				<div>
					{messages.map((msg, index) => {
						return (
							<div
								key={index}
								style={{ border: "2px solid red", margin: "10px" }}
							>
								<p>{msg.userId}</p>
								<p>{msg.text}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<input
					type='text'
					placeholder='type message'
					onChange={(e) => setNewMessage(e.target.value)}
					value={newMessage}
				/>
				<button onClick={sendMessage}>Send</button>
			</div>
		</div>
	);
};

export default Chat;
