/*
With .call(), we can make sure that the object has everything,
not just what's down the prototype chain,
but what's supposed to be directly on each new object.

eg:
Person.prototype <-- Policeman.prototype <-- officer (an instance)
  |    |     |        |  |     |      |
 fn   ln   greet     fn  ln  greet  badge#
*/

var util = require("util");

function Person() {
  this.firstname = "John";
  this.lastname = "Doe";
}

// add method to the Person constructor:
Person.prototype.greet = function () {
  console.log("Hello " + this.firstname + " " + this.lastname);
};

function Policeman() {
  // without calling Person.call(this), the Policeman object will not have firstname and lastname properties initialized:
  Person.call(this);
  this.badgenumber = "1234";
}

// set up prototype chain:
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
// Hello John Doe
// Hello undefined undefined (if without ln.13)
