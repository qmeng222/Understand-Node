// require is a function
// the argument you pass to the function is a string, and the string contains the location or the name of the module that you wish to import or use in this file

// require("./greet.js");
// require("./greet");

// greet(); // greet is not defined

var greet_outside = require("./greet");
greet_outside();
// var greet = require("./greet") work as well, no confusion for the same varialbe name
