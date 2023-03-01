// get the build-in fs (file system) module:
var fs = require("fs");

// 1. read file synchronously using a buffer (sits on heap, heap is the memory space V8 engine is using):
var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8"); // utf8 encoding
console.log(greet); // Hello world!

// 2. read file asynchronously (more than more thing happening at the same time):
var greet2 = fs.readFile(
  __dirname + "/greet.txt",
  "utf8",
  // error-first callback using a buffer (sits on heap):
  function (err, data) {
    console.log(data);
  }
);

console.log("Done!");
/*
// asynchronous --> note the order:
Done!
Hello world!
*/
