// reference: Node > docs > API > Buffer

// take the string "Hello" and convert it to binary data using utf8 encoding:
var buf = new Buffer("Hello", "utf8");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // "Hello"
console.log(buf.toJSON());
// { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buf[2]); // 108
// since I initialised the buffer to allow for five characters, when I wrote the buffer, it didn't expand or stretch, instead it overwrote the data in the buffer：
buf.write("wo");
console.log(buf.toString()); // "wollo"

/*
1. obj --> JSON:
const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};
const json = JSON.stringify(person);
console.log(json);

2. JSON --> obj:
let people = await fetch("https://randomuser.me/api/?results=5"); // from JSON
let data = await people.json(); // into object
*/
