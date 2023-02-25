"use strict";

/*
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

// .prototype is used to define the greet() method as a shared method for all instances of the Person constructor:
Person.prototype.greet = function () {
  console.log("Hello, " + this.firstname + " " + this.lastname);
};

// Hello, Jane Doe
// { greet: [Function (anonymous)] }
// { greet: [Function (anonymous)] }
// true
*/

// in JavaScript, class is essentially a function👆
// class is really syntactic sugar, we don't even see the concept of prototype in the syntax👇
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hello, " + this.firstname + " " + this.lastname);
  }
}

var john = new Person("John", "Doe");
john.greet(); // "Hello, John Doe"

var jane = new Person("Jane", "Doe");
jane.greet(); // "Hello, Jane Doe"

console.log(john.__proto__); // {}
console.log(jane.__proto__); // {}
console.log(john.__proto__ === jane.__proto__); // true

console.log(Person.prototype); // {}
// .__proto__ is a property of an instance object that points to the prototype object of its constructor function:
console.log(john.__proto__ === Person.prototype); // true
