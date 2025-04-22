const express = require("express");
const cors = require("cors");
const razorpayInstance = require("./utils/razorpay");
const {
	validateWebhookSignature,
} = require("razorpay/dist/utils/razorpay-utils");
const { membershipAmount } = require("./utils/constants");
const { keyId, webhookSecret } = require("./envfile");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});

const userAuth = (req, res, next) => {
	console.log("Authenticated");
	req.user = {
		id: 1,
		firstName: "Praveen",
		lastName: "Ande",
		isPremium: false,
	};
	next();
};

/* Payment Gateway*/

const paymentTable = [];

app.post("/payment/create", userAuth, async (req, res) => {
	console.log("payment Create");
	try {
		const user = req.user;
		const { membershipType } = req.body;
		const Razorpayconfiguration = {
			amount: membershipAmount[membershipType] * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: "INR",
			receipt: "praveenapp_user1",
			notes: {
				firstName: user.firstName,
				lastName: user.lastName,
				membershipType: membershipType,
			},
		};
		const order = await razorpayInstance.orders.create(Razorpayconfiguration);

		// 01 Save it in he Database
		console.log(order);
		// userId, paymentId, orderId, status, amount, currency, receipt, notes
		const payload = {
			userId: 1,
			paymentId: null, // Optional
			orderId: order.id,
			status: order.status,
			amount: order.amount,
			currency: order.currency,
			receipt: order.receipt,
			notes: order.notes,
		};
		// Save Order on Database
		paymentTable.push(payload);
		console.table(paymentTable);

		// 02 Return back my order details to frontend
		res.json({ ...payload, keyId: keyId });
	} catch (err) {
		return res.status(500).json({
			msg: err.message,
		});
	}
});

app.post("/payment/webhook", async (req, res) => {
	console.log("payment webhook");
	try {
		const webhookSignature = req.get("x-razorpay-signature");
		const isWebhookValid = validateWebhookSignature(
			JSON.stringify(req.body),
			webhookSignature,
			webhookSecret // webhookSecret
		);

		if (!isWebhookValid) {
			return res.status(400).json({
				msg: "webhook is not valid",
			});
		}

		// Update my Payment Status in DB
		const paymentDetails = req.body.payload.payment.entity;
		const payment = paymentTable.find(
			(p) => p.orderId === paymentDetails.order_id
		);
		payment.status = paymentDetails.status; // Save Status in DB

		// Update the user as premium
		// Return Success response to razorpay -> stop the infinity loop -> when api not working razorpay calls infinity times

		/*
				if (req.body.event === "payment.captured") {
		}

		if (req.body.event === "payment.failed") {
		}
		*/

		return res.status(200).json({
			msg: "Webhook received successfully",
		});
	} catch (err) {
		return res.status(500).json({
			msg: err.message,
		});
	}
});

app.get("premium/verify", userAuth, async (req, res) => {
	const user = req.user;
	if (user.isPremium) {
		return res.json({
			isPremium: true,
		});
	}
	return res.json({ isPremium: false });
});

/**/

app.listen(5000, () => {
	console.log("Example app listening on port 5000");
});
