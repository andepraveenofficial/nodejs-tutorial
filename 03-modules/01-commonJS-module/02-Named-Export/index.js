//Import Module
// To import a module which is the local file, use the require() function with the relative path of the module(fileName).

// console.log(require("./common.js"));

const common = require("./common.js");

console.log(common); // { message: 'Hello World', name: 'Ande Praveen' }

const {message, name} = common;
console.log(message);  // Hello World
console.log(name);  // Ande Praveen
