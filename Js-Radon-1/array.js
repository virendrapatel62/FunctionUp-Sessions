const array = [1, 2, 3, 4, 5, 6];

array.push(10);
console.log(array);
array.pop();
console.log(array);

array.unshift(10);
console.log(array);

array.shift();
console.log(array);

console.log(array.join());
console.log(array.join("-"));
console.log(array.join(" : "));
console.log(array.join(" --- "));

console.log(array.length);

// function itr(number, index, array) {
//   console.log("Calling. ", number, index, array);
// }

array.forEach((item) => {
  console.log(item);
});

const newArray = array.map((item) => {
  return item * 3;
});

console.log(array);
console.log(newArray);

const value = newArray.reduce((result, item) => {
  console.log(result, item);
  return item + result;
}, 0);
console.log({ value });

const users = [
  { id: 1, marks: 23 },
  { id: 3, marks: 34 },
  { id: 5, marks: 55 },
];

const totalMarks = users.reduce((result, markObject) => {
  return markObject.marks + result;
}, 0);
console.log({ totalMarks });

const arr100 = new Array(100).fill(null).map((item, index) => index);

console.log(arr100);
