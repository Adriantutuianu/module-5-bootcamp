// Write Your Code Below
// * Create a function using function declaration that checks if two parameters are equal in both value and type, just value, or not equal in any way and prints it to the console.

//   * Call the function so that it prints each option.

function isEqual(x, y) {
  if (x === y) {
    console.log("They are equal in type and value");
  } else if (x == y) {
    console.log("They are equal in value");
  } else {
    console.log("They are not equal");
  }
}

isEqual(10, 10);
isEqual("10", 10);
isEqual(10, true);
//
//
//
//

// Create a function using function expression that iterates through an array and checks if each index is less than 10 and prints if it is or isn't.
var array = [1, 3, 5, 7, 9, 11];

var check = function (arr) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] < 10) {
      console.log(arr[i].toString() + " Number is less than 10");
    } else {
      console.log(arr[i].toString() + " Number is bigger than 10");
    }
  }
};

check(array);
// console.log(check());
// for (let i = 0; i < array.length; i++) {
//   check();
// }

// function add(x) {
//     if (x < 10) {
//       console.log(x + 1);
//     } else {
//       console.log(x - 1);
//     }
//     return;
//   }

//   function print(word) {
//     console.log(word);
//     return;
//   }

//   function correct(bool) {
//     console.log('The Answer is: ', bool)
//     return;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 7) {
//       add(array[i]);
//     } else if (array[i] === 'Hello') {
//       print(array[i]);
//     } else {
//       correct(array[i])
//     }
//   }
