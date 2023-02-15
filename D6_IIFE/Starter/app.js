/*
TOPIC: IIFE
All variables and functions inside IIGE will not conflict with orhter variables or functions outside (private scope), even if they have the same name.
*/

(function (lastname) {
  var firstname = "John";
  console.log(firstname);
  console.log(lastname);
})("Doe");

var firstname = "Zen";
console.log(firstname);

// "John"
// "Doe"
// "Zen"
