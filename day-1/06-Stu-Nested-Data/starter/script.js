//WRITE YOUR CODE BELOW
// var menu = {
//   drink: {
//     name: "water",
//     price: 2,
//   },
// };

var menu = {
  drinks: [
    {
      name: "Coffee",
      price: 2.5,
      sizeOptions: ["Small", "Medium", "Large"],
      milkOptions: ["Regular", "Skimmed", "Soy"],
      iced: false,
      sugar: true,
    },
    {
      name: "Iced Tea",
      price: 3.0,
      sizeOptions: ["Regular", "Large"],
      sugar: true,
    },
  ],
  foods: ["Bagel", "danish", "Muffin"],
};

// Print the price of a drink
console.log("Price of a Coffee:", menu.drinks[0].price);

// Print the price of two drinks
const totalPriceOfTwoDrinks = menu.drinks[0].price + menu.drinks[1].price;
console.log("Price of two drinks:", totalPriceOfTwoDrinks);

// Print the milk and size options for a drink
const drinkOptions = menu.drinks[0];
console.log("Milk Options:", drinkOptions.milkOptions);
console.log("Size Options:", drinkOptions.sizeOptions);

console.log(menu.foods);
