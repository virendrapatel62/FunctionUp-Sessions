// function sum(number1, number2) {
//   return number1 + number2;
// }

// console.log(sum(10, 12));
// console.log(sum(10, 23));
// console.log(sum(10, 4));
// console.log(sum(10, 1442));
// console.log(sum(10, 142));
// console.log(sum(10, 152));
// console.log(sum(10, 162));
// console.log(sum(10, 142));
// console.log(sum(10, 132));

function sum(number1) {
  //10
  return function addWith(number2) {
    return number1 + number2;
  };
}

const addWith10 = sum(10);

console.log(addWith10);
console.log(addWith10(12));
console.log(addWith10(132));
console.log(addWith10(1));
console.log(addWith10(612));
console.log(addWith10(162));

const addWith99 = sum(99);

console.log(addWith99);
console.log(addWith99(12));
console.log(addWith99(132));
console.log(addWith99(1));
console.log(addWith99(612));
console.log(addWith99(162));
