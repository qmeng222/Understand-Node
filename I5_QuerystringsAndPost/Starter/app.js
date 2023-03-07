var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

// creates a middleware function that uses body-parser's urlencoded function with an options object { extended: false }. This options object tells the urlencoded function to use the Node.js built-in querystring library to parse the data instead of the third-party qs library, and to only parse simple data types (not nested objects) from the URL-encoded data.
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});

app.get("/", function (req, res) {
  res.render("index");
});

// eg: localhost:3000/person/3?qstr=123
http: app.get("/person/:id", function (req, res) {
  // res.render() is used specifically for rendering dynamic views, and takes the name of the template file as its first argument:
  res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
});

// localhost:3000/person
http: app.post("/person", urlencodedParser, function (req, res) {
  // res.send() is a more general-purpose method for sending any type of response (eg: HTML, plain text, JSON, or binary data):
  res.send("Thank you!"); // shown on webpage after submission
  console.log(req.body.firstname); // shown on console
  console.log(req.body.lastname); // match with the name attributes of the input fields
});

app.post("/personjson", jsonParser, function (req, res) {
  res.send("Thank you for the JSON data!");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
