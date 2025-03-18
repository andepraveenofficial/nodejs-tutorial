// Handle by V8 engine
var a = 1078698;

// Handle by V8 engine
var b = 20986;

// 01 Handle By libuv
https.get("https://api.fbi.com", 
  (res) => {
    console.log(res?.secret);
  }
)

// 02 Handle By libuv
setTimeout(() => {
  console.log("setTimeout");
}, 5000)

// 03 Handle By libuv
fs.readFile("./note.txt", "utf8", (data) => {
  console.log("File Data", data);
})

// Handle by V8 engine
function multiplyFn(x,y){
  const result = x*y;
  return result;
}

// Handle by V8 engine
var c = multiplyFn(a,b);

// Handle by V8 engine
console.log(c);