// array = [1, 2,3 , ]

// function sumIt(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }

//   return sum;
// }

// ... vs ...

// function sumIt(...numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }

//   return sum;
// }

function sumIt() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}

// const sum = sumIt([1, 2, 3, 4, 5, 2, 23, 2]);
const sum = sumIt(1, 2, 3, 4, 5, 2, 23, 2);
console.log({ sum });
