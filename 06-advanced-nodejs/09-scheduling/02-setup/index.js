const cron = require('node-cron');

const task = () => {
  console.log('Running a scheduled task at:', new Date());
};

// Every second
cron.schedule("* * * * * *", task); 

// Every second (note: node-cron doesn't support seconds)
// Smallest interval is 1 minute
console.log('Note: node-cron minimum interval is 1 minute');


// Every minute
// Format: "* * * * *"
// (minute) (hour) (day of month) (month) (day of week)
cron.schedule("* * * * *", task);

// Every 30 seconds
// Format: "*/30 * * * * *"
// (at every 30 seconds)
cron.schedule("*/30 * * * *", task);

// Every hour
// Format: "0 * * * *"
// (at minute 0 of every hour)
cron.schedule("0 * * * *", task);

// Every day
// Format: "0 0 * * *"
// (at 00:00 every day)
cron.schedule("0 0 * * *", task);

// Additional examples:
// Every 30 minutes
cron.schedule("*/30 * * * *", task);

// Every Monday at 1:30 PM
cron.schedule("30 13 * * 1", task);

// At 00:00 every day
cron.schedule('0 0 * * *', () => {
  console.log('Running a task at midnight every day');
});