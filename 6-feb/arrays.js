const numbers = [1, 2, 3, 4, 5, 6];

const n1 = numbers.forEach((item, index) => {
  console.log(item, index);
});

console.log({ n1 });

const n2 = numbers.map((item, index) => {
  console.log(item, index);
  return item * 2;
});

console.log({ n2 });

const n3 = numbers.filter((item, index) => {
  console.log(item, index);
  return item % 2 == 0;
});

console.log({ n3 });

const sum = numbers.reduce((acc, item, index) => {
  console.log({ acc, item, index });
  return acc + item;
}, 0);

console.log(sum);

const firstEven = numbers.find((item) => {
  return item % 2 == 0;
});

console.log({ firstEven });
