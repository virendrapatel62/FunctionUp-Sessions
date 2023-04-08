function Counter() {
  this.value = 0;
}

Counter.prototype.inc = function () {
  this.value++;
};
Counter.prototype.dec = function () {
  this.value--;
};
Counter.prototype.print = function () {
  console.log(this);
};

const counter1 = new Counter();

counter1.inc();
counter1.inc();
counter1.inc();
counter1.dec();
counter1.print();

const counter2 = new Counter();

console.log(counter1.inc == counter2.inc);
console.log(counter1.dec == counter2.dec);

counter2.inc();
counter2.inc();
counter2.inc();
counter2.inc();

counter2.dec();
counter2.print();
counter1.print();

// const s = "";
// const s2 = "sdfsf";
// const s3 = "sdfsf";

// console.log(s.charAt == s2.charAt);
// console.log(s2.charAt == s3.charAt);

// console.clear();

// function CounterFunction(value = 0) {
//   function inc() {
//     value++;
//   }

//   function dec() {
//     value--;
//   }

//   function print() {
//     console.log(value);
//   }

//   return {
//     inc,
//     dec,
//     print,
//   };
// }

// const counter3 = CounterFunction(10);

// counter3.inc();
// counter3.inc();

// counter3.print();

// console.clear();

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

// setTimeout(() => {
//   console.log("after 2 sec");
// }, 2000);

// const time = Date.now();
// console.log("In loop");

// console.log("after loop");

// setTimeout(() => {
//   console.log("after 6 sec");
// }, 6000);

// setTimeout(() => {
//   console.log("after 4 sec");
// }, 4000);

// console.log("7");
// console.log("6");
// console.log("5");

console.clear();

setTimeout(() => {
  console.log("after Zero sec");
}, 0);

Promise.resolve(10).then((value) => {
  console.log(value);
});
