var greet1 = require("./greet1");
greet1();

// var greet2 = require("./greet2");
// greet2.greet();

var greet2 = require("./greet2").greet;
greet2();

var greet3 = require("./greet3"); // greet3 is an obj
greet3.greet(); // Hello world 3
greet3.words = "Hello world 3 is changed!";

var greet3b = require("./greet3");
greet3b.greet(); // Hello world 3 is changed!
// Note: if you simply return an object from require, that obj will be CACHED and any other call to that same file via the require function will get you back this same object everywhere

var Greet4 = require("./greet4"); // ability to create new obj
var greet4 = new Greet4();
greet4.greet();

// var greet5 = require("./greet5"); // greet5 is an obj
// greet5.greet();

var greet5 = require("./greet5").greet;
greet5();
// Note: there's no way for me to change the greeting property or access it (protected)
