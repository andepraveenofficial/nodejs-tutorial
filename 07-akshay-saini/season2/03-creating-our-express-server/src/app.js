const express = require('express');

const app = express();  // It creates the new web-server

/*
app.use((req, res) => {
  res.send("Hello From the Server");
})  // Always respond with "Hello From the Server"
*/


app.use("/test", (req, res) => {
  res.send("Request From the /test Route");
}) 

app.use("/hello", (req, res) => {
  res.send("Request From the /hello Route");
}) 

 app.use("/", (req, res) => {
   res.send("Request From the / Route");
}) // wildcard



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});