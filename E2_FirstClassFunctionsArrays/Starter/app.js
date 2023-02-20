// object properties and methods
var obj = {
  greet: "Hello",
};

console.log(obj.greet); // "Hello"
console.log(obj["greet"]); // "Hello"
var prop = "greet";
console.log(obj[prop]); // "Hello"
console.log(obj.prop); // undefined

// functions and arrays:
var arr = [];

arr.push(function () {
  console.log("Hello world 1");
});
arr.push(function () {
  console.log("Hello world 2");
});
arr.push(function () {
  console.log("Hello world 3");
});

console.log(arr);
/*
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
*/

// item --> Function(anonymous):
arr.forEach((item) => item());

// arr.forEach(function (item) {
//   item();
// });
