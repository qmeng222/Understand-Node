// Your Javascript Code Goes Here

// function expression:
function greet() {
  console.log("hi");
}
greet(); // "hi"

// treat the funtion as a variable:
function logGreeting(fn) {
  fn(); // invoke the function
}
logGreeting(greet); // "hi"

// function expression:
var greetMe = function () {
  console.log("Hi, Qingying👋");
};

greetMe(); // "Hi, Qingying👋"
logGreeting(greetMe); // "Hi, Qingying👋"

logGreeting(function () {
  console.log("Hello, Qingying");
});
// "Hello, Qingying"
