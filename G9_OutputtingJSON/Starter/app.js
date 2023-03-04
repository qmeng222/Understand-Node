var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
      firstname: "John",
      lastname: "Doe",
    };
    // `res.end(obj.toString())` will onlt give [object object], not its contents
    res.end(JSON.stringify(obj)); // serialize the obj (obj --> JSON string), will log {"firstname": "John", "lastname": "Doe"}
  })
  .listen(1337, "127.0.0.1");
