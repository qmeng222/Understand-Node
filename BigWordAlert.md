## Big Word Alert

- first-class functions: everything you can do with other types, you can do with functions (i.e. set variable equals to string/number/function)
- function expression: a block of code that results in a value (bc functions in JS are first-class)
- invoke: run/call the function
- commonJS modules: an agreed upon standard for how modules should be structured in JS
- module: a reusable block (of code) whose existence doesn't impact other code
- name/value pair: a name which maps to a value (eg: address = "100 Main St.")
- object: a collection of name/value pairs
- object literal: name/value pairs that are separatd by commas, and surrounded by curly braces
- function constructors: a function that construct object, and the "this" keyword points to a new empty object
- inheritance: one obj gets access to the propreties and methods of another obj
- prototype object: an object that acts as a blueprint for creating instances of a particular type, the object you create then inherits these methods from the prototype.
- primitive (by value): a type of data that represnets a single value (like a number or a string), in other words, not an object (by reference).
- IIFE: Immediately Invoked Function Expressions
- scope: where in code you have access to a particular variable or function.
- JSON: JavaSCript object notation (string)
- revealing module pattern: exposing only properties/methods you want via an returned object (to protect code within modules)
- mutate: to change something (eg: addinga method or property to an obj means you've mutated the obj)
- event listener: function(s) that respond to an event
- maigc string: a string that has some special meaning in our code. This is bad, because it makes it easy for a typo to cause a bug, and hard for tools (e.g. VS Code) to help us find it.
- syntactic sugar: a feature that only changes how you type something, but nothing changes under the hood.
- synchronous: one process executing at a time. JavaScript is synchronous (only one line of code executing at a time).
- asynchronous: more than one process is running simultaneously. Node does things asynchronously. V8 does not.
- non-blocking: doing other things without stopping the current running.
- callback: a function passed as a argument to another function which will be called/invoked at a later time; the purpose of a callback is to allow a function to operate on data that is not immediately available.
- buffer: a temporary holding spot for data being moved from one placeto another. Intentionally limited in size. eg: gathering enough data for it to continue watching/processing the video.
- stream: a sequence of data made available over time. eg: when you stream a movie, you are not downloading the movie, instead you watch the movie as it comes.
- chunk: a piece of data being sent through a stream. Data is split in chunks and streamed.
- pipe: connecting two streams, pipe from a Readable stream to a Writable stream.
- binary data: data stored in 0s and 1s.
- character encoding: how chars are stored in binary. eg: "h" --> 104 --> 01101000 (in UTF-8)
- byte = 8 bits (8 zeros and ones)
- error-first callback: take an error obj as the first parameter, this first parameter will be null if no error.
- abstract (base) class: a type of constructor that you never work directly with, but inherit from. We create new custom objects that inherit from the abstract base class.
- method chaining: a method returns an object, so we can keep calling more methods on the returned object.
- protocol: a set of rules client(browser) and server agree to use when communicating.
- IP (internet protocol):
- TCP (transmission control protocol): TCP is the protocol that takes the information and split it into pieces (packets), and send those packets one at a time through the socket from computer to computer.
- HTTP (hypertext transfer protocol): defining data being transferred via TCP/IP (just like constructiong a business letter following some well accepted format).
  ```
             http req
  browser --------------> web server
          <--------------
             http res
  ```
- Port: when a program (eg: Node, Email, FTP)is setup to receive packets from a particular port, it's said that program is "listening" to that port.
  ```
  socket address 78.132.160.4.443
  https://www.google.com
                             request
                 browser ---------------> web server (78.132.160.4):
                                            443 NodeJS
                                            123 Email
                                            222 FTP
  ```
