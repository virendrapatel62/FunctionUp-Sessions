// function sayHello(name) {
//   console.log("Hello ", name);
// }

const sayHello = (name) => {
  console.log("Hello ", name);
};

// const sayHello = () => {
//   console.log("Hello");
// };

// sayHello("Virnedra");
console.log(sayHello);

// const sum = (x, y) =>{ return  x + y };
const sum = (x, y) => x + y;

// console.log(sum(12, 12));

const arrowFun = () => {
  //   console.log(arguments);
  console.log(this);
};

const normalFunction = function () {
  //   console.log(arguments);
  console.log(this);
};

// arrowFun();
// normalFunction();

const student = {
  name: "virendra",
  walk: function () {
    console.log(this, "inside walk");
  },
};

console.log(student.walk());
