// mutated the exports obj by adding a method:
exports.greet = function () {
  console.log("Hello 2");
};

console.log(exports); // { greet: [Function (anonymous)] }
console.log(module.exports); // { greet: [Function (anonymous)] }
