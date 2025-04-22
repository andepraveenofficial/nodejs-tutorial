import React, { useEffect } from "react";
import axios from "axios";

const Premium = () => {
	const [isPremium, setIsPremium] = React.useState(false);

	useEffect(() => {
		verifyPremiumUser();
	}, []);
	const verifyPremiumUser = async () => {
		const res = await axios.get("http://localhost:5000/premium/verify", {
			withCredentials: true,
		});
		if (res.data.isPremium) {
			setIsPremium(true);
		} else {
			setIsPremium(false);
		}
	};

	const handleBuyClick = async (membershipType) => {
		console.log(membershipType);
		const order = await axios.post("http://localhost:5000/payment/create", {
			membershipType: membershipType,
		});

		// It should open the Razorpay Dialog box
		const { amount, keyId, currency, notes, orderId } = order.data;
		// Open Razorpay Checkout
		const options = {
			key: keyId,
			amount,
			currency,
			name: "Dev Tinder", // This Display on the Dialog bix
			description: "Connect t other developers",
			order_id: orderId, // This is the order_id created in the backend
			prefill: {
				name: notes.firstName + " " + notes.lastName,
				email: notes.emailId,
				contact: "9999999999",
			},
			theme: {
				color: "#F37254",
			},

			/* Handler Function -> when Dialog box closes then this handler function called*/
			handler: verifyPremiumUser,
		};
		const rzp = new window.Razorpay(options); // This Razorpay will come razorpay script
		rzp.open();
	};

	return isPremium ? (
		<div
			style={{
				border: "solid 2px orange",
				display: "flex",
				gap: "30px",
			}}
		>
			{/*Silver Membership*/}
			<div style={{ border: "solid 2px green", padding: "20px" }}>
				<h1>Silver</h1>
				<ul>
					<li>Chat with other people</li>
					<li>Send 100 connection Requests per day</li>
					<li>Blue Tick</li>
					<li>3 months</li>
				</ul>
				<button onClick={() => handleBuyClick("silver")}>Buy Silver</button>
			</div>
			{/*Gold Membership*/}
			<div style={{ border: "solid 2px gold", padding: "20px" }}>
				<h1>Gold</h1>
				<ul>
					<li>Chat with other people</li>
					<li>Infinity connection Requests per day</li>
					<li>Blue Tick</li>
					<li>6 months</li>
				</ul>
				<button onClick={() => handleBuyClick("gold")}>Buy Gold</button>
			</div>
		</div>
	) : (
		<h1>Your Already a Premium User</h1>
	);
};

export default Premium;
