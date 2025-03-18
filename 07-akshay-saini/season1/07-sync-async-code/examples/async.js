const fs = require("fs");

const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// It Blocks the Main thread -> Runs as sync
const fileData = fs.readFileSync("./note.txt", "utf8");
console.log("File Data:", fileData);

console.log("Afer reading file");

https.get("https://dummyjson.com/products/1", () => {
  console.log("Fetched Data Successfully");
})

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000)

fs.readFile("./note.txt", "utf8", (err, data) => {
  console.log("File Data", data);
})  

function multiplyFn(x,y){
  const result = x*y;  
  return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication result is : ", c);