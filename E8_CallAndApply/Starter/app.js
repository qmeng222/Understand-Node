/*
call and apply let us change what this keyword points to.

var obj = {
  name: "John Doe",
  greet: function (param1, param2) {
    console.log(`Hello ${this.name}`); // this --> obj
  },
};

obj.greet.call({ name: "Jane Doe" }, param1, param2);
obj.greet.apply({ name: "Jane Doe" }, [ param1, param2 ]);
*/

var obj = {
  name: "John Doe",
  greet: function () {
    console.log(`Hello ${this.name}`); // this --> obj
  },
};

obj.greet(); // Hello John Doe
// replace this with { name: "Jane Doe" }：
obj.greet.call({ name: "Jane Doe" }); // Hello Jane Doe
obj.greet.apply({ name: "Jane Doe" }); // Hello Jane Doe
