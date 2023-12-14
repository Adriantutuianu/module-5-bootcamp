var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// 1
constellations.unshift("Canis Major");

// 2
planets.pop();

// 3
var galaxy = constellations.concat(planets);
console.log(galaxy);
console.log(constellations);
console.log(planets);

var uppercaseStar = star.toUpperCase();
console.log(uppercaseStar);
