const fs = require("fs"); // Import fs module


/*
Callback Queue FLow : Priority Queue Flow

1. process
2. promise
3. timer
4. poll
5. check
6. close

*/

const a = 100;

// 04 poll
fs.readFile("./file.txt", "utf8", () => {
  console.log("File Data");
})



// 02 promise
Promise.resolve().then(() => {
  console.log("promise");
})

// 03 timer
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// 05 check
setImmediate(() => {
  console.log("setImmediate");
})


// 03 timer
/*
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

*/


// 01 process
process.nextTick(() => {
  console.log("nextTick");
});






function printA(){
  console.log("a", a);
}

printA();
console.log("last line of the file");
 

/*
Change the code structure to get same output
*/