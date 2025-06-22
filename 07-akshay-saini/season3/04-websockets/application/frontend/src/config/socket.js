import io from "socket.io-client";

const BASE_URL = "http://localhost:5000"; // Backend URL

/*

export const createSocketConnection = () => {
	return io(BASE_URL);
};

*/

export const createSocketConnection = () => {
	if (location.hostname === "localhost") {
		return io(BASE_URL);
	} else {
		return io("/", { path: "/api/socket.io" });
	}
};
