var greet = require("./greet");
var greet2 = require("./greet2");
greet2.greet(); // "Hello 2"

/*
 1. module.exports points to an empty obj
 2. when the function expression is invoked, module.exports is passed to the variable exports
 3. now they both point to the same loaction in memory (passed by reference)
 4. when exports = ..., it's a new location in memory (pass by reference is broken)
 5. However in Node.js source code, require returns the module obj property called exports: require --> module.exports
*/
