import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header style={{ border: "2px solid orange" }}>
			<nav>
				<ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/users'>Users</Link>
					</li>
					<li>
						<Link to='/chat/:targetUserId'>Chat</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
