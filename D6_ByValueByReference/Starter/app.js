// 1. pass by value:
function changeNum(b) {
  b = 2;
}
var a = 1;
changeNum(a);
console.log(a); // 1

// 2. pass by reference:
function changeObj(d) {
  d.prop1 = function () {};
  d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // { prop1: [Function (anonymous)], prop2: {} }
