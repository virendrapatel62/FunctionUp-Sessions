// const  , let , var
const number = 12;
let number2 = 13;
var number3 = 14;

console.log(number, number2, number3);

function somtihing() {
  {
    const name = 90; // block
    let letVar = 90; // block
    var variableUsingVar = 90; // function
  }
  console.log(variableUsingVar);
}

somtihing();

// console.log(variableUsingVar);
// console.log(letVar, name);

// function task() {
//   let a = 90;
//   const b = 23; // . re assign

//   a = 90;
//   //   b = 23;

//   if (true) {
//     let c;
//     const a = 8;
//   }

//   console.log(c, a);
// }

// task();
