var accounts = [
  {
    firstName: "tudor",
    lastName: "tocan",
    balance: 100,
  },
  {
    firstName: "peter",
    lastName: "mouse",
    balance: 200,
  },
  {
    firstName: "mickey",
    lastName: "mouse",
    balance: 250000,
  },
];

accounts.find(function (element) {
  if (element.balance === 250000) {
    console.log(element.firstName);
  }
});

var filteredArray = accounts.filter(function (element) {
  return element.lastName.charAt(0) === "m";
});

console.log(filteredArray);
