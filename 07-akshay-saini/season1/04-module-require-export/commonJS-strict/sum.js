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

// module.exports = calculateSum
module.exports = {calculateSum, x}