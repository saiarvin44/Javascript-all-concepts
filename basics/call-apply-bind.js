function a() {
  console.log("hi");
}

a.call();

const wiz = {
  name: "Arvind",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin",
  health: 30,
};

console.log("1", archer);
wiz.heal.call(archer, 50, 30); // calling like this will pass archer to the other function
// and this inside heal will refer to archer
console.log("2", archer);

const healArcher = wiz.heal.bind(archer, 50, 30);
healArcher();
console.log("3", archer);
