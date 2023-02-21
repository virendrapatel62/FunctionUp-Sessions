// const numbers = [1, 2, 3, 4];

// // function printElement(item) {
// //   console.log(item);
// // }

// // numbers.forEach(printElement);

// // const found = numbers.find((item) => {
// //   return item === 1;
// // });

// // // numbers.map
// // // numbers.reduce
// // // numbers.reduceRight
// // // numbers.forEach
// // // numbers.filter

// // console.log({ found });

// const sayHello = (username, task) => {
//   // HOF
//   console.log("Hello", username ? username : "User");
//   task();
// };

// // Call back
// const task = () => {
//   console.log("Learn JS");
// };
// sayHello("Virendra", task);

// // function sum(x, y) {
// //   console.log("SUM : ", x + y);
// // }

// // sum(1, 2);
// // sum(1, 3);
// // sum(1, 4);
// // sum(1, 5);

// // function sumWith1(y) {
// //   console.log("SUM WITH 1: ", 1 + y);
// // }

// // sumWith1(2);
// // sumWith1(3);
// // sumWith1(4);
// // sumWith1(5);

// function sumWithAnything(x) {
//   return (y) => {
//     console.log("Doing Sum with ", x, y, "SUM : ", x + y);
//   };
// }

// const sumWithOne = sumWithAnything(1);

// sumWithOne(3);
// sumWithOne(4);
// sumWithOne(5);

// const sumWithTen = sumWithAnything(10);

// sumWithTen(10);
// sumWithTen(13);
// sumWithTen(14);

// const sumWithHun = sumWithAnything(100);

// sumWithHun(10);
// sumWithHun(13);
// sumWithHun(14);

// sumWithOne(10);

// const obj = {};

// obj[0] = "A";
// obj[1] = "1";
// obj[2] = "2";
// obj[3] = "3";

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// for (let key in numbers) {
//   console.log(key, numbers[key]);
// }

const obj = {
  name: "virendra",
  age: 24,
  phone: 343545454,
  device: "MAC Book",

  forEach: function (callback) {
    for (const key in this) {
      callback(this[key]);
    }
  },
};

obj.forEach((value) => {
  console.log(value);
});
