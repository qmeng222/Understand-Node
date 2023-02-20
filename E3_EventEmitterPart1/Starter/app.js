var Emitter = require("./emitter");

var emtr = new Emitter();

// two listeners that will respond to the event "greet":
emtr.on("greet", function () {
  console.log("Somewhere, someone said hello.");
});

emtr.on("greet", function () {
  console.log("A greeting occurred!");
});

console.log("Hello!");
emtr.emit("greet");
/*
Hello!
Somewhere, someone said hello.
A greeting occurred!
*/
