/*
With .call(), we can make sure that the object has everything,
not just what's down the prototype chain,
but what's supposed to be directly on each new object.

eg:
Person instances <-- Policeman instances <-- officer (an instance)
     |    |                   |
     fn   ln                badge#

 • In JavaScript, properties that are added to the object's constructor function via `this` inside the constructor are specific to each instance of the object.

 • On the other hand, properties that are added to the constructor function's prototype are shared among all instances of the object. When you add a property to the prototype, it is not stored in the object's memory, but rather, it is accessed through the prototype chain. This is more memory-efficient, especially when you have many instances of the same object.

 In the given example, firstname and lastname are defined in the constructor function of Person, which means each instance of Person will have its own copy of these properties. util.inherits(Policeman, Person) only sets up the prototype chain so that Policeman instances inherit the methods defined on Person's prototype. It does not give Policeman instances access to the firstname and lastname properties defined in the Person constructor.

 While the util.inherits statement sets up the prototype chain between Policeman and Person, it does not automatically add the firstname and lastname properties to the Policeman prototype. Instead, those properties are added to each Policeman instance individually when the Person constructor is called by `Person.call(this);` within the Policeman constructor.
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
