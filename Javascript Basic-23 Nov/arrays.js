const name = "virendra";
const name1 = "sandeep";
const name2 = "mohan";

const names = ["virnedra", "sandeep", "mohan", "abc", "a"];

// console.log(names[0]);
// console.log(names[2]);
// console.log(names[names.length - 1]);
// console.log(names[Math.floor(names.length / 2)]);

names.push("abcd");
console.log(names.pop());

console.log(names);
console.log(names.join("\n"));

const names2 = names.concat([1, 2, 4]);

console.log(names2);

console.log(names.shift());

console.log(names);

console.log(names.unshift("First Element"));

console.log(names);

const chars = ["a", "n", "c", "b"];

console.log(chars.sort());

console.log(chars);

const numbers = [2, 3, 1, 12, 13, 78, 67, 16];

function sortingFunction(x, y) {
  console.log({ x, y });
  return x - y;
}

numbers.sort(sortingFunction);
console.log(numbers);
