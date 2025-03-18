// Modules protects their variables and functions from leaking

console.log("sum.js file");

/*
const x = "Hello World";
function calculateSum(){
  const sum =  10+20;
  console.log(sum);
}

*/
const x = "Hello World";
function calculateSum(){
  const sum =  10+20;
  console.log(sum);
}

console.log(module.exports); // {} // Empty Object

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

// module.exports = calculateSum
module.exports = {calculateSum, x}