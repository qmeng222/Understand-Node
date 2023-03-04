// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {

//   res.writeHead(200, {'Content-Type': 'application/json'});
//   var obj = {
//     firstname: 'John',
//     lastname: 'Doe'
//   };
//   res.end(JSON.stringify(obj));

// }).listen(8080, '127.0.0.1');

var http = require("http");
var fs = require("fs");

// we aren't even looking at the URL, we're just saying, here's the HTTP response for ANY request:
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/index.htm").pipe(res);
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      var obj = {
        firstname: "John",
        lastname: "Doe",
      };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(1337, "127.0.0.1");
