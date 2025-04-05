// const http = require("node:http"); // core module -> native module -> built-in module
const http = require("http"); // core module

// console.log(http);

// Create Server
/*
const server = http.createServer((req, res) => {
  // reply
  res.end("Hello World");
});
*/


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  }
  else if (req.url === "/about") {
    res.end("About Page");
  }
  else{
    res.end("404 Page Not Found");
  }
});


// server.listen(5000)
server.listen(5000)

