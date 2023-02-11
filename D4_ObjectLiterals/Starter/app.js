// TOPIC: objects & object literals

var person = {
  firstname: "John",
  lastname: "Doe",
  greet: function () {
    // console.log("Hello, " + this.firstname + " " + this.lastname + "🧑‍🔧");
    console.log(`Hello, ${this.firstname} ${this.lastname}🧑‍🔧`);
  },
};

// use the obj literal:
person.greet();

// dot notation vs. bracket notation:
console.log(person.firstname, person["lastname"]); // "John"  "Doe"
