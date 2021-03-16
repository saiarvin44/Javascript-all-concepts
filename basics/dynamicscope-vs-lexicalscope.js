const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

// lexical scope doesnt matter here, all that matters is how the function is called

const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};
obj.sing();
// when there's nothing to the left of function invocation, it refers to the global execution context scope

const obj2 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  },
};
obj2.sing();
// using arrow function makes it lexically scoped

const obj3 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};
obj3.sing()();
// this was before ES6, this enforces lexical scope
