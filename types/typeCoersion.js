console.log(1 == "1"); // type coersion, '1' is converted to 1
console.log(1 === "1"); // false
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
console.log(false == ""); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log("" == 0); // true
console.log("" == []); // true
console.log("" == {}); // false
