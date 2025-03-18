const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 5000;

/* -----> Middlewares <----- */
// app.use(cors()); // Allows all origins by default
// CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Allow only requests from this origin
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(helmet()); // Use Helmet to secure the app with default settings

app.get("/", (req, res) => {
  res.json({ data: "I am GET" });
});

app.listen(port, () => {
  console.log(`Server 1 listening on port ${port}`);
});
