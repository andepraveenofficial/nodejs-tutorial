# Real-World Use Cases of `node-cron`

`node-cron` is a Node.js package used for scheduling tasks at specific intervals, similar to Unix cron jobs. It is useful for automating repetitive tasks such as backups, emails, log cleanups, and more.

---

## **1. Automated Database Backups**
**Scenario:** Back up the database daily at 2 AM.

```javascript
const cron = require('node-cron');
const exec = require('child_process').exec;

cron.schedule('0 2 * * *', () => {
  exec('mysqldump -u root -pYourPassword database_name > backup.sql', (err) => {
    if (err) console.error('Backup failed:', err);
    else console.log('Database backup successful');
  });
});
```

---

## **2. Sending Scheduled Emails**
**Scenario:** Send daily reports via email at 9 AM.

```javascript
const cron = require('node-cron');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

cron.schedule('0 9 * * *', async () => {
  const msg = {
    to: 'user@example.com',
    from: process.env.SENDGRID_EMAIL,
    subject: 'Daily Report',
    text: 'Here is your daily report...'
  };
  await sgMail.send(msg);
  console.log('Daily report email sent');
});
```

---

## **3. Cleaning Up Logs**
**Scenario:** Delete old logs every Sunday at midnight.

```javascript
const cron = require('node-cron');
const fs = require('fs');

cron.schedule('0 0 * * 0', () => {
  fs.rmSync('/var/logs/app.log', { force: true });
  console.log('Old logs deleted');
});
```

---

## **4. Fetching Stock Prices**
**Scenario:** Fetch stock prices every minute.

```javascript
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('* * * * *', async () => {
  const { data } = await axios.get('https://api.example.com/stock-price?symbol=TSLA');
  console.log(`TSLA Price: $${data.price}`);
});
```

---

## **5. Expiring User Sessions**
**Scenario:** Remove inactive sessions every 30 minutes.

```javascript
const cron = require('node-cron');
const db = require('./database');

cron.schedule('*/30 * * * *', async () => {
  await db.query('DELETE FROM sessions WHERE last_activity < NOW() - INTERVAL 30 MINUTE');
  console.log('Expired sessions cleared');
});
```

---

## **6. Social Media Post Scheduling**
**Scenario:** Post scheduled tweets at 10 AM.

```javascript
const cron = require('node-cron');
const postToTwitter = require('./twitterAPI');

cron.schedule('0 10 * * *', async () => {
  await postToTwitter('Good morning! Start your day with positivity. ☀️');
  console.log('Tweet posted');
});
```

---

## **7. Fetching Weather Data**
**Scenario:** Fetch and update weather data every hour.

```javascript
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('0 * * * *', async () => {
  const { data } = await axios.get('https://api.weather.com/v3/wx/conditions/current?apiKey=YOUR_KEY');
  console.log(`Weather updated: ${data.temperature}°C`);
});
```

---

## **8. Generating Monthly Invoices**
**Scenario:** Generate invoices on the 1st of every month.

```javascript
const cron = require('node-cron');
const generateInvoices = require('./invoiceService');

cron.schedule('0 0 1 * *', async () => {
  await generateInvoices();
  console.log('Invoices generated');
});
```

---

## **Key Benefits of `node-cron`**

- 🚀 **Automates repetitive tasks** (backups, reports, etc.).
- 🕒 **Runs tasks on a schedule** (daily, weekly, monthly, etc.).
- 💰 **Reduces manual work** and ensures reliability.
- 🔄 **Handles background jobs efficiently**.
- 🔒 **Improves security** (e.g., token expiry, session cleanup).

Would you like to add more use cases? 😊

