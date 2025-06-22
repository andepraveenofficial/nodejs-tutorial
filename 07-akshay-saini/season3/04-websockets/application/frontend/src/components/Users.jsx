import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const fetchUsers = async () => {
		const response = await axios.get("http://localhost:5000/users");
		setUsers(response.data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (users.length === 0) return <p>No Users</p>;

	return (
		<div>
			{users.map((user) => {
				return (
					<div
						key={user.id}
						style={{ border: "2px solid red", margin: "1rem", padding: "1rem" }}
					>
						<h1>{user.id}</h1>
						<h1>{user.name}</h1>
						<Link to={`/chat/${user.id}`}>
							<button>chat</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
