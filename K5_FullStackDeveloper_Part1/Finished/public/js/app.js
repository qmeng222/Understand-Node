// JS on the client:
angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc() {
  this.people = clientPeople;
}
