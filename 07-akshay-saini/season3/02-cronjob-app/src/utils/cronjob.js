const cron = require("node-cron");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const ConnectionRequestModel = require("../model/ConnectionRequest");

cron.schedule("0 8 * * *", async () => {
	// send emails to all people who got requests the previous day

	try {
		const yesterday = subDays(new Date(), 1);
		const yesterdayStart = startOfDay(yesterday);
		const yesterdayEnd = endOfDay(yesterday);

		const pendingRequests = await ConnectionRequestModel.find({
			status: "interested",
			createdAt: {
				$gte: yesterdayStart,
				$lt: yesterdayEnd,
			},
		}).populate("fromUserId toUserId");

		// If Praveen got 50 requests -> so send 1 email to praveen
		const listOfEmails = [
			...new Set(pendingRequests.map((request) => request.toUserId.emailId)),
		];

		for (const email of listOfEmails) {
			console.log(
				email,
				"There are so many requests pending, please login to devTinder and check it out! (accepted/ignored)"
			);
		}
	} catch (err) {
		console.log(err);
	}
});
