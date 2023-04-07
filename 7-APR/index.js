// var a = 90;
// let v = 90;
// const c = 90;

// Reaasign
//  Manipulation

// const obj = {
//   student: {
//     name: "virendra",
//   },
// };

// const array = [1, 23];

// // array = [90];
// array.push(90);

// ERROR:
// obj = 90;

// manipulation
// obj.student.name = "Something";

// console.log(a, v, c);

// functions class except
// var v = 91;
// function task() {
//   var v = 94;
//   {
//     const PI = 3.14;
//     let age = 23;
//     var v = 90;

//     console.log(PI);
//   }

//   // console.log(age);
//   console.log(v);
// }

// console.log(v);

// task();

// var username = "Virendra";

// console.log(window);
// console.log(global);

// console.log(exports, require, module, __filename, __dirname);

// function task() {
//   var a;
//   console.log(a, b);
//   {
//     var a = 90;
//   }
//   if (1) {
//     let a = 98;
//   }
//   console.log(a);
//   function b() {}
// }

// task();

function doItAfterHello() {
  console.log("Doing it after sayin hello");
  console.log("Bye");
}
// function doSum(a, v) {
//   return a + v;
// }

// const sumValue = doSum(23, 34);

// console.log(sumValue);

// const abc = doSum;

// console.log(abc(23, 34));

// function sayHello(doItAfterHello2) {
//   console.log("Hello user"); //2
//   doItAfterHello2();
// }

// console.log("before heelo");
// debugger;
// sayHello(doItAfterHello); //1

function callBackFun() {
  console.log("inside args");
}
function HigherOrderFunction(callback) {
  console.log("inside hof");
  callback();
  console.log("inside hof");
  return returnFn;
}
function returnFn() {
  console.log("inside returnFn");
}

const value = HigherOrderFunction(callBackFun);
value();

console.log(value);

console.clear();

const funn = function () {};

console.clear();

const array = [1, 2, 34, 6];

array.forEach(function (age, index) {
  console.log(age, index);
});
