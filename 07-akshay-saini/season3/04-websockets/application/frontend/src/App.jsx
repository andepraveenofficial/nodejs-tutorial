import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Header from "./layouts/Header";
import Users from "./components/Users";

const App = () => {
	localStorage.setItem("userId", 3);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='/users' element={<Users />} />
				<Route path='/chat/:targetUserId' element={<Chat />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
