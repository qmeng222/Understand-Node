/*
TOPIC: function constructor, prototype object, and inheritance

When you try to access a property of an object:
1. if the property can't be found in the object itself, it will then check the object's prototype and its prototype's prototype, and so on, until it finds the property
2. or return undefined when reaching the end of the prototype chain

The idea behind prototypes is to allow multiple instances of an object to share the same methods, without having to store a separate copy of the methods for each instance. This helps to reduce memory usage and increase efficiency. For example, if you have a custom object type called "Person", each instance will have a different set of properties, such as name, age, and address, but they could all share the same set of methods, such as "speak", "walk", and "eat". By storing these methods on the prototype object, you can define them once and reuse them for each instance, without having to recreate them each time you create a new instance of the Person object.

Two ways to access the prototype of an object:
const john = new Person("John", "Doe");
1. console.log(john.__proto__);
2. console.log(Object.getPrototypeOf(john)); // RECOMMENDED
*/

function Person(firstname, lastname) {
  this.fn = firstname;
  this.ln = lastname;
}

const john = new Person("John", "Doe"); // "this" keyword points to a new empty object
console.log(john); // Person { fn: 'John', ln: 'Doe' }
console.log(john.__proto__); // {}

// just another object
Person.prototype.greet = function () {
  // console.log("Hello " + this.fn + " " + this.ln + "🐼");
  console.log(`Hello, ${this.fn} ${this.ln}🦊`);
};

john.greet(); // "Hello, John Doe🦊"
const jane = new Person("Jane", "Doe");
jane.greet(); // "Hello, Jane Doe🦊"

console.log(john.__proto__); // { greet: [Function (anonymous)] }
console.log(jane.__proto__); // { greet: [Function (anonymous)] }
console.log(john.__proto__ === jane.__proto__); // true

console.log(Object.getPrototypeOf(john)); // { greet: [Function (anonymous)] }
console.log(Object.getPrototypeOf(jane)); // { greet: [Function (anonymous)] }
console.log(Object.getPrototypeOf(john) === Object.getPrototypeOf(jane)); // true

Person.prototype.introduce = function () {
  console.log(`I'm ${this.fn}.`);
};

console.log(Object.getPrototypeOf(john));
// { greet: [Function (anonymous)], introduce: [Function (anonymous)] }
console.log(Object.getPrototypeOf(jane));
// { greet: [Function (anonymous)], introduce: [Function (anonymous)] }
console.log(Object.getPrototypeOf(john) === Object.getPrototypeOf(jane)); // true
