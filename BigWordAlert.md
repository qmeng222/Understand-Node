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
- API (application programming interface): a set of tools for building an application. On the web, the tools are usually made available via a set of URLs which accept and send data via HTTP and TCP/IP.
- endpoint: url in a web API
- serialize: translate an object into a format that can be stored and transferred (JSON, CSV, ...)
- deserialize: convert the format back into an object
- routing: mapping HTTP request to content (whether actual files that exist on the server or not).
- package management system: software that automates installing and upating packages (deals with what version you have or need, and manages dependencies.)
- package: code that are ready to be used.
- dependency: code that another set of code depends on to function. eg: if you use some code in you app. your app depends on it.
- HTTP method: specifies the type of action the request is going to make (eg: GET, POST, DELETE, ...)
- middleware: a function that processes the HTTP request and response objects in a web application, and can modify the request or response or call the next middleware function in the stack.
- static file: files that are served directly to clients without being processed by the server.
  - For example, when a server receives a request for a static file such as an image or CSS file, it simply reads the file from disk and sends it to the client. There is no need for the server to modify the content of the file or execute any dynamic logic before serving it.
  - In contrast, when a server receives a request for a dynamic resource such as a webpage or API endpoint, it needs to execute code to generate a response based on the client's request.
- template engine: think of a template engine as a chef's recipe book. Just like a recipe book provides a template for how to make a dish, a template engine provides a template for how to render dynamic content on a web page. The chef can customize the recipe with specific ingredients to make it unique, just like how a template engine allows developers to inject dynamic data and logic into the template to create a unique web page for each user.
  - Express Router passes data to the template engine, typically through a route handler.
  - Template engine processes the data and generates an HTML document.
  - The rendered template is returned to the client via an HTTP response.
- REST (Representational State Transfer): an architectural style for building APIs (so when we look at the URL, we understand what it's doing).
- SQL (Structured Query Language): a type of relational database.
- NoSQL (Not Only SQL): a type of non-relational database that enables flexible data storage and retrieval for unstructured data. eg: MongoDB.
- stack (one builds upon another): the combination of all technologies used to build a software.
- MEAN (MongoDB, Express, AngularJS, and NodeJS) stack: all JavaScript-based
  - [x] MongoDB (pantry): The pantry in the kitchen is like a database where all the ingredients are stored. In the same way, MongoDB stores and retrieves data.
  - [x] Express (waiter): The waiter takes the order from the customer and communicates it to the kitchen (the database layer that interacts with the database, such as querying, inserting, updating, and deleting data). In the same way, Express receives requests from the client and communicates with the NodeJS server.
  - [x] AngularJS (tablet menu): The tablet menu allows the customers to see what food is available, and select what they want to order. In the same way, AngularJS presents the data to the user in a way that is easy to understand and navigate (UI in the browser).
  - [x] NodeJS (chef): The chef prepares the food and sends it to the customer. In the same way, NodeJS handles the HTTP req & res, retrieves the data from MongoDB (pantry), and sends it to the client via Express (waiter).
- DOM (document object modal): a tree-like structure that represents the HTML elements of a web page

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="lib/jquery.js"></script>
      <link rel="stylesheet" href="styles.css" />
      <title>Document</title>
    </head>

    <body></body>
  </html>
  ```

- AngularJS: AngularJS is the receipe that takes basic ingredients like HTML, CSS, and JavaScript and creates a gourmet dish (web application). Angular has two-way data binding.
  - [x] React is best for building smaller, simpler applications with less structure.
  - [x] Angular is better suited for larger, more complex applications with a more structured and opinionated architecture.
- body-parser: body-parser is a middleware that helps with parsing request body data in a server application. When a client sends a request to a server, it usually includes data in the form of a request body. The body-parser module helps parse this request body data and make it available as a JavaScript object in the `req.body` property of the request object, so that it can be easily accessed and used by the server code.
