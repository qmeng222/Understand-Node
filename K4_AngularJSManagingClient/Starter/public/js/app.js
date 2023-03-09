angular.module("TestApp", []);

// add a controller executing ctrlFunc to the TestApp module:
angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc() {
  this.message = "Hello";

  this.people = [
    {
      name: "John Doe",
    },
    {
      name: "Jane Doe",
    },
    {
      name: "Jim Doe",
    },
  ];
}
