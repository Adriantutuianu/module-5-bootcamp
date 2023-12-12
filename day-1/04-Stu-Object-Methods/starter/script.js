//WRITE YOUR CODE BELOW

var menu = {
  coffee: 2,
  water: 3,
  beer: 4,
};

var prices = Object.values(menu);

var total = 0;

console.log("Menu list: ", Object.keys(menu));

for (var i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total menu cost:  " + total);
