// IIFE : Function expression invoked immediately
(function () {
  console.log("IIFE");
})();

var script1 = (function () {
  function a() {
    return 5;
  }
  return { a: a };
})();
// we can do like this to avoid using global variables everywhere

console.log(script1.a());
