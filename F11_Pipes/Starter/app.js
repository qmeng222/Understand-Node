var fs = require("fs");
var zlib = require("zlib"); // gzip

// create readable stream from greet.txt:
var readable = fs.createReadStream(__dirname + "/greet.txt");

// create writable stream to greetcopy.txt:
var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

// create a compressed writable stream to greet.txt.gz
var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz"); // compressed is writable

// change data into a compressed version:
var gzip = zlib.createGzip(); // gzip is both readable and writable

// readable is the source, writalbe is the destination:
readable.pipe(writable); // pipe function return the destination by default

// piple on the destination:
readable.pipe(gzip).pipe(compressed); // method chaining
