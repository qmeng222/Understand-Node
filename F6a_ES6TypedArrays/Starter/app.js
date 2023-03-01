// create a buffer storing 8 bytes (64 bits, aka 64 zeros and ones):
var buffer = new ArrayBuffer(8);

// use 32 bits to store one number, so a 64-bit buffer can store 2 numbers:
var view = new Int32Array(buffer);

// store 2 numbers in base 10:
view[0] = 5;
view[1] = 15;
view[2] = 30; // exceeds the storage
console.log(view); // Int32Array(2) [ 5, 15 ]
