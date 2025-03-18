require("./anotherFile.js");
// require("./sum.js");
const  sumObj = require("./sum.js");  // {calculateSum, x}
const {calculateSum, x} = sumObj; // Destructuring

console.log("index.js file");

/*
You cannot access directly the functions and variables with simple require("./sum.js");.
*/
// calculateSum();


calculateSum();