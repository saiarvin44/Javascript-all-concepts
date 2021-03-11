// function scope
// only variables inside functions have their own execution context and their own scopes

if (5 > 4) {
  var secret = "12345";
}
console.log(secret);

// block scope
// Let and const are used to implement block scope

function loop() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log("final", i);
}
loop();
// if we replace that var with let, it'll throw an error because let becomes a block scope
