// go to Node.js > Docs > API for reference:
var util = require("util"); // notice the location difference

var name = "Qingying";
var greeting = util.format("Hello, %s", name);
util.log(greeting); // 16 Feb 00:21:24 - Hello, Qingying
