var person = {
  firstname: "",
  lastname: "",
  greet: function () {
    return this.firstname + " " + this.lastname;
  },
};

// object 1:
var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

// object 2:
var jane = Object.create(person);
jane.firstname = "Jane";
jane.lastname = "Doe";

console.log(john.greet());
console.log(jane.greet());
