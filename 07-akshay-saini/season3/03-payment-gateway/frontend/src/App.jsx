import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Premium from "./pages/Premium";
import Navbar from "./layouts/Navbar";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/premium' element={<Premium />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
