/*
prototype chain:
EventEmitter.prototype <-- Greetr.prototype <-- greeter1 (an instance)
       |       |                    |           greeter1.on()
       on     emit                greet         greeter1.emit()
                                                greeter1.greet()
*/

/*
var EventEmitter = require("events");
var util = require("util");

function Greetr() {
  // call to make sure that all objects created from Greetr have all the properties and methods they should:
  EventEmitter.call(this);
  this.greeting = "Hello world!";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ": " + data);
  this.emit("greet", data);
};

var greeter1 = new Greetr();

greeter1.on("greet", function (data) {
  console.log("Someone greeted!: " + data);
});

greeter1.greet("Tony");
*/

"use strict";

var Greetr = require("./greetr");
var greeter1 = new Greetr();

// register a listener function to be called when the 'greet' event is emitted:
greeter1.on("greet", function (data) {
  console.log("Someone greeted!: " + data);
});

// emit the 'greet' event inside the greet method:
greeter1.greet("Tony");

// "Hello world!: Tony"
// "Someone greeted!: Tony"
