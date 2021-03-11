// "use strict";  // uncomment this to throw error saying height is not defined
function weird() {
  height = 50;
  return height;
}
weird();

var hey = function doodle() {
  return "hey";
};

hey();
doodle(); // throw an error saying doodle is not defined
// because doodle gets added to its own execution context
// and hence not able to find it in global execution context
