const cron = require("node-cron");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

/* -----> Schedulers <----- */
/*
cron.schedule("* * * * *", () => {
	console.log("running a task every minute", new Date());
});
*/

const runEverySecond = cron.schedule(
	"* * * * * *",
	() => {
		console.log("running a task every second", new Date());
	},
	{
		scheduled: false, // Otherwise it automatically runs cronjobs schedulers
	}
);

const runEveryMinute = cron.schedule(
	"* * * * *",
	() => {
		console.log("running a task every minute", new Date());
	},
	{
		scheduled: false,
	}
);

app.listen(5000, () => {
	console.log("server is running on port 5000");
	// Run Schedulers
	runEverySecond.start();
	runEveryMinute.start();
});
