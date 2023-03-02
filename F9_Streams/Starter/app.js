var fs = require("fs");

// read IN PIECES from the file:
var readable = fs.createReadStream(__dirname + "/greet.txt", {
  encoding: "utf8",
  highWaterMark: 16 * 1024, // chunk size; 1 kilobyte = 1024 bytes
});

// write to:
var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

readable.on("data", function (chunk) {
  console.log(chunk);
  console.log(chunk.length);
  writable.write(chunk);
});
