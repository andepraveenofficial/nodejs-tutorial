import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav style={{ display: "flex", gap: "1rem", border: "solid 2px black" }}>
			<Link to='/'>Home</Link>
			<Link to='/premium'>Premium</Link>
		</nav>
	);
};

export default Navbar;
