const express = require('express');

const app = express();  // It creates the new web-server

app.use(express.json()); // It handles the receive json data from client

app.use("/user", (req, res,next) => {
  console.log("First Route Handler"); 
  next(); // Give control to next handler
}, (req, res,next) => {
  console.log("Second Route Handler"); 
  next();   // Give controlling to next handler
}, (req, res, next) => {
  console.log("Third Route Handler"); 
  res.send("Response from the Third Route Handler");
  next();   // Give controlling to next handler
},(req, res) => {
  console.log("Forth Route Handler"); 
  // res.send("Response from the Forth Route Handler"); // Throws the error -> cannot set the Headers after they are sent to the client
})


app.use("/user1", (req, res) => {
  console.log("First Route Handler"); 
  res.send("Response from the First Route Handler"); 
  return; // Stops execution after sending response
})

/* We can send Array of the handlers */
// app.use("user3", h1, h2, [h3, h4], h5); // these handlers valid executes one by one
app.use("/user3", [
	(req, res, next) => {
		console.log("First Route Handler");
		next();
	},
	(req, res, next) => {
		console.log("Second Route Handler");
		next();
	},
	(req, res) => {
		console.log("Third Route Handler");
		res.send("Response from the Third Route Handler");
		return; // Stops execution after sending response
	},
]);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});