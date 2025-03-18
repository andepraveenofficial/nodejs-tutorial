/* -----> Logger <----- */
const logger = require("./config/logger");
const morgan = require("morgan");

const express = require("express");
const app = express();
const port = 5000;

/* -----> morgan Format <----- */
const morganFormat = ":method:url :status :response-time ms";

/* -----> morgan Middleware <----- */
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

/* -----> Routes <----- */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  logger.info("I am Fetch Users"); // Custom console
  res.send("Fetch Users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
