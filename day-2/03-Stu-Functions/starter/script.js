// Write Your Code Below
// * One function that adds 1 and 2 together using Function Declaration.
function sum(a, b) {
  console.log(a + b);
}

sum(2, 1);

// * One function that subtracs 10 from 20 using Function Expression.

var substract = function (a, b) {
  console.log(a - b);
};

substract(20, 10);

// * One function that calculates the area of a square using an outside variable, using either function declaration or expression.

// Function declaration
function calculateSquareArea(sideLength) {
  // Assuming 'outsideVariable' is the outside variable
  return sideLength * sideLength * outsideVariable;
}

// Example usage
var outsideVariable = 2; // Set the outside variable
var area = calculateSquareArea(5); // Calculate the area with a side length of 5
console.log(area); // Output: 50
