// get the core http module:
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" }); // 200 status code; give back just plain text
    res.end("Hello World\n"); // the last thing to send
  })
  .listen(1337, "127.0.0.1"); // 1337 is the port; 127.0.0.1 is the standard internal IP address (local host)

// type "localhost:1337" in the browser
// "Hello World\n"
