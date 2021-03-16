function b() {
  "use strict";
  console.log(this); // will print undefined as it got into block scope because of use strict
}
b();

const obj = {
  // this will automatically take block scope as function is a part of the object
  name: "billy",
  sing: function () {
    console.log(this.name);
  },
};

obj.sing();

// If there is no object to the left, it refers to the global object
