"use strict";

var EventEmitter = require("events");

// module exports:
module.exports = class Greetr extends EventEmitter {
  constructor() {
    super(); // same to EventEmitter.call(this);
    this.greeting = "Hello world!";
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    // emit the 'greet' event:
    this.emit("greet", data);
  }
};
