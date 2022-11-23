console.log("loops");

for (let i = 0; i < 5; i += 2) {
  console.log(i); // 0
}

const numbers = [1, 2, 4, 5, 67, 7];

for (let number of numbers) {
  console.log({ number });
}

const object = {
  name: "virendra",
  age: 24,
  address: "jabalpur",
  deg: "SE",
};

console.log(object.name);
console.log(object.age);
console.log(object.address);
console.log(object.deg);

console.log(object["name"]);

for (let key in object) {
  console.log(key, object[key]);
}

function itr(number) {
  console.log("Using for Each", number);
}

numbers.forEach(itr);
