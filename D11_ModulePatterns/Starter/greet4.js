function Greet() {
  this.words = "Hello world 4";
  this.greet = function () {
    console.log(this.words);
  };
}

module.exports = Greet;
