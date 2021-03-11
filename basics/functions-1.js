function marry(person1, person2) {
  console.log("Arguements : ", arguments); // avoid using it as it slows down the JS engine
  console.log("Arguements : ", Array.from(arguments));
}

function marry2(...args) {
  // instead use like this
  console.log("Arguements : ", args);
  console.log("Arguements : ", Array.from(args));
}

marry("abc", "def");
marry2("abc", "def");
marry();
