var a = 5;
var b = a; // pass by value
b++;
console.log(b);

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;
obj2.password = "easy";
console.log(obj1);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c); // shallow copy of array

let obj = { a: "a", b: "b", c: { deep: "try to copy mee" } };
let shallowClone = Object.assign({}, obj); // shallow copy of object
let deepClone = JSON.parse(JSON.stringify(obj)); // deep clone
let clone2 = { ...obj }; // shallow copy of object
