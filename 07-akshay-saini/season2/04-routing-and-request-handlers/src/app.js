const express = require('express');

const app = express();  // It creates the new web-server

app.use(express.json()); // It handles the receive json data from client


app.get("/user", (req, res) => {
  const data = {
    name:"Praveen",
    age:28
  }

  console.log("Request get method from /user Route");
  res.send(data);
}) 

app.get("/user/:userId", (req, res) => {
  const data = {
    name:"Praveen",
    age:28
  }

  console.log("Request get method from /user Route");
  console.log("dynamic parameter", req.params);
  res.send(data);
}) 

app.post("/user", (req, res) => {
  console.log("Request post method from /user Route");
  console.log(req.body);
  res.send("Data successfully saved to the database");
}) 

app.put("/user", (req, res) => {
  res.send("Request put method from /user Route");
}) 

app.patch("/user", (req, res) => {
  res.send("Request patch method from /user Route");
})

app.delete("/user", (req, res) => {
  console.log("Request delete method from /user Route");
  console.log(req.query);
  res.send("Deleted successfully");
}) 

app.head("/user", (req, res) => {
  res.send("Request head method from /user Route");
}) 

app.options("/user", (req, res) => {
  res.send("Request options method from /user Route");
}) 

// It is match to  all the HTTP MEthods by default, i.e. GET, POST, PUT, PATCH, DELETE
app.use("/user", (req, res) => {
  console.log("Request use method from /user Route");
  res.send("Request method Not Found");
}) 



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});