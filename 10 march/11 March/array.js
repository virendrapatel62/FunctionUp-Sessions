var array = [1, 0, 23, 34, 35, 3, 6, 464, 457];

let result = array.forEach((item, index, array) => {
  console.log({ item, index });
});

result = array.map((item, index) => {
  return item * 2;
});

result = array.filter((item, index) => {
  return item % 2 == 0;
});

result = array.find((item, index) => {
  return item % 2 == 0;
});
result = array.findIndex((item, index) => {
  return item % 2 == 0;
});

result = array.every((item, index) => {
  // check for falsy values

  return item;
});

result = array.some((item, index) => {
  return item;
});

// [1, 0, 23, 34, 35, 3, 6, 464, 457];
result = array.reduce((acc, item, index) => {
  return acc + item; // 1 ,  1 , 24 ,
}, 0);

// {} , [] , 0 , 1

result = array.reduce((acc, item, index) => {
  acc[index] = item;
  console.log(acc);
  return acc;
}, {});

result = array.map((item, index) => {
  return {
    id: item,
  };
});

result = array.reduce((acc, item, index) => {
  acc.push({
    id: item,
  });
  return acc;
}, []);

// [1, 0, 23, 34, 35, 3, 6, 464, 457];
result = array.reduceRight((acc, item, index) => {
  acc.push({
    id: item,
  });
  return acc;
}, []);

result = array
  .filter((item) => item % 2 == 0)
  .map((item) => item * 2)
  .reduce((acc, item) => {
    acc[item] = item;
    return acc;
  }, {});

console.log(array);
console.log(result);

console.clear();

function MyArray() {
  this.items = {};
  this.length = 0;

  this.push = function (item) {
    this.items[this.length++] = item;
  };

  this.pop = function () {
    delete this.items[this.length - 1];

    this.length--;
  };

  this.toString = function () {
    let string = ``;
    for (const key in this.items) {
      string += this.items[key];
      string += ", ";
    }
    return `[${string}]`;
  };
}

const myArray = new MyArray();

console.log(myArray);

myArray.push(~~(Math.random() * 100));
myArray.push(~~(Math.random() * 100));
myArray.push(~~(Math.random() * 100));
myArray.push(~~(Math.random() * 100));
myArray.push(~~(Math.random() * 100));
myArray.push(23);
myArray.push(564);

myArray.pop();
myArray.pop();

console.log(myArray.toString());
