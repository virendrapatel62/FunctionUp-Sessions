// function sum() {}

// () => {};

// function sum() {
//   console.log("I am Sum Function with body");
// }

// () => {
//   console.log("I am Sum Function with body");
// };

// function sum(x, y) {
//   console.log("I am Sum Function with body");
//   const sum = x + y;
// }

// (x, y) => {
//   console.log("I am Sum Function with body");
//   const sum = x + y;
// };

// function sum(x, y) {
//   console.log("I am Sum Function with body");
//   const sum = x + y;

//   return sum;
// }

// (x, y) => {
//   console.log("I am Sum Function with body");
//   const sum = x + y;

//   return sum;
// };

function sum(x, y) {
  return x + y;
}

(x, y) => {
  return x + y;
};

const sumArrow = (x, y) => x + y;

const rresult = sumArrow(12, 12);

console.log(rresult);
console.clear();

// const sayHello = () => {
//   console.log(this);
// };

// sayHello();

function MyClass() {
  this.name = "classname";
  console.log(this);

  const student = {
    name: "Virendra",
    age: 24,
    printThis: function () {
      console.log(this);
    },
    printThisArrow: () => {
      console.log(this);
    },
  };

  student.printThis();
  student.printThisArrow();
}

console.log(new MyClass());

// console.log(student);

// console.log(new Object());
// console.log(new Number());
// console.log(new String());
// console.log(new Date());

function A(name, age) {
  this.name = name;
  this.age = age;

  this.printMe = () => {
    console.log({ curetn: this });
  };
}

const a = new A("A", 10);
const b = new A("B", 20);

a.printMe();

console.log(a, b);

console.clear();

{
  console.log(this); // window

  function ABC() {
    console.log({ ABC: this });
  }

  new ABC();
}
