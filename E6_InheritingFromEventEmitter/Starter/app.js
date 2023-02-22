// get the module:
var EventEmitter = require("events");
// get the library:
var util = require("util");

// add a property:
function Greetr() {
  this.greeting = "Hello world!";
}

// new obj created from Greetr will get all methods and properties of EventEmitter:
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  // console.log(this); // Greetr { ... }
  console.log(this.greeting + ": " + data);
  this.emit("greet", data);
};

/*
prototype chain:
EventEmitter.prototype <-- Greetr.prototype <-- greeter1 (an instance)
       |       |                   |            greeter1.on()
       on     emit               greet          greeter1.emit()
                                                greeter1.greet()
*/

var greeter1 = new Greetr();

greeter1.on("greet", function (data) {
  console.log("Someone greeted!: " + data);
});

greeter1.greet("Tony");

/*
In JavaScript, the .prototype property is used to add properties and methods to an object constructor.

eg:
// Define a Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person constructor using prototype
Person.prototype.introduce = function() {
  console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Create a new Person instance
var john = new Person("John", 30);

// Call the introduce method on the john instance
john.introduce(); // Output: Hi, my name is John and I am 30 years old.
*/
