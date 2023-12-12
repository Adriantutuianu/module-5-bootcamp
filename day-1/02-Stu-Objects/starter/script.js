//WRITE YOUR CODE BELOW
var customerObject = {
  drinkName: "capucinno",
  numberSugars: 2,
  drinkReady: true,
};

console.log("Drink name: " + customerObject.drinkName);
console.log("Number of sugars: " + customerObject.numberSugars);

if (customerObject.drinkReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
