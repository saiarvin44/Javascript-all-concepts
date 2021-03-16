console.log(typeof null);
console.log(typeof function () {});

function a() {
  return 5;
}
a.hi = "hihihi";
console.log(a.hi);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
