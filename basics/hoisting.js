a();

function a() {
  console.log("hi");
}

function a() {
  console.log("bye");
}
// this will be executed as it will be hoisted latest

var favFood = "grapes";
var foodThoughts = function () {
  console.log("Original fav food : " + favFood);
  var favFood = "sushi";
  console.log("New fav food : " + favFood);
};
foodThoughts();
// when we call the functions foodThoughts, hoisting happens inside the function and
// favFood gets assigned undefined and it prints undefined first and output is :
// undefined sushi
