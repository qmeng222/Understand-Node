var greeting = "Hello world 5";

function greet() {
  console.log(greeting);
}

// revealing module pattern: exposing only properties/methods you want via an returned object
module.exports = {
  greet: greet, // greet is a function
};
