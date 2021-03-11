var x = "x";

function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Sai Arvind";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();
