// import External Files
const ratio = require("./../ratio/index.js");
const factorial = require("./../factorial/index.js");

function ratioAndFactorial(firstNumber, secondNumber, thirdNumber) {
  const firstItem = ratio(firstNumber, secondNumber);
  const secondItem = factorial(thirdNumber);
  let myObject = {
    ratio: firstItem,
    factorial: secondItem,
  };
  return myObject;
}

// Default Exporting
module.exports = ratioAndFactorial;
