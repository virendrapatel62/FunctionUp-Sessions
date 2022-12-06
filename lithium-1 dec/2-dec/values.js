// let number = 90;
// let array = {
//   name: "virendra",
//   age: 24,
// };

// number = 92;

// array.name = "Sandeep";

let number = 89;
let person = {
  name: "Virendra",
};

function updateName(p) {
  // reference
  p.name = "Sandeep";
}

function updateNumber(n) {
  // primitive
  n = 93;
}

console.log(person);
console.log(number);

updateName(person);
updateNumber(number);

console.log(person);
console.log(number);
