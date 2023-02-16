// function constructor:
function Greet() {
  this.words = "Hello world 3";
  this.greet = function () {
    console.log(this.words);
  };
}

module.exports = new Greet();
