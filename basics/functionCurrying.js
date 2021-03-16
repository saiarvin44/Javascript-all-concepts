function multiply(a, b) {
  return a * b;
}
let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(2)); // ability to pass partial parameters is called currying
