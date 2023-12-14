function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function blackjack() {
  var player = getRndInteger(4, 21);

  if (player === 21) {
    console.log("You win!");
  } else {
    console.log("");
    var userHits = confirm("your score is: " + player + "points.");
  }
}
var userHits = confirm("do you want to keep playing?");
