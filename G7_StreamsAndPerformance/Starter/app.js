// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(__dirname + '/index.htm');
//     res.end(html);

// }).listen(1337, '127.0.0.1');

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.htm").pipe(res);
    // every chunk of data read from the file will be buffered and then piped out to the HTTP response stream
  })
  .listen(1337, "127.0.0.1");
