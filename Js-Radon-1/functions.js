// function sayHello() {
//   console.log("Hello ");
//   console.log("Bye");
// }

// function sayHello(name) {
//   console.log("Hello " + name);
//   console.log("Bye");
// }

// function getGreetingMessage(name) {
//   return `Hello ${name}`;
// }

// // sayHello("Virendra");
// // sayHello("Sandeep");
// // sayHello("Harsh");

// const message = getGreetingMessage("Virnedra");

// console.log(message);

function doubleIt(number) {
  return number * 2;
}

function halfIt(number) {
  return number / 2;
}

const number = 10;
const double = doubleIt(number); // 20
const half = halfIt(double);

console.log({ number, double, half });

function sortTwoNumber(x, y) {
  if (x > y) {
    return [y, x];
  }

  return [x, y];
}

// const sorted = sortTwoNumber(25, 23); // [23 , 25]
// const min = sorted[0];
// const max = sorted[1];
// console.log({ sorted, min, max });
// .   [20, 23];
const [min, max] = sortTwoNumber(23, 20); // [20 , 23]

console.log({ min, max });

const numbers = [1, 2, 3];
const [one, two, three] = numbers;

console.log({ one, two, three });
