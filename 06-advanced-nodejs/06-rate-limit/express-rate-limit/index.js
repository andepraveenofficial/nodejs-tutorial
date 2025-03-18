const express = require("express");
const cors = require("cors");
const limiter = require("./config/ratelimiter");
const app = express();
const port = 5000;

app.use(cors());
app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
