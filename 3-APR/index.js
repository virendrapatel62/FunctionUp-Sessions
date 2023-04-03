// const student = {
//   name: "Virendra",
//   age: 24,
//   address: {
//     city: "JBP",
//     state: "MP",
//   },
// };

// const {
//   name: firstName,
//   age,
//   address: { city, state },
// } = student;

// // const name = student.name;
// // const age = student.age;
// // const address = student.address;

// console.log(firstName, age, city, state);

// const array = [1, 2, 3];

// // const one = array[0];
// // const two = array[1];
// // const three = array[2];

// const [one, two, three] = array;

// console.log(one, two, three);

const student = {
  name: "virenda",
  age: 24,
  marks: [98, 92],
  phones: [96468, 94564564562],
};

// const maths = student.marks[0];

const {
  marks: [maths, english],
  phones: [p1],
} = student;

console.log(maths, english, p1);

const users = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const {
  company: { name: companyName },
} = users;

const {
  address: {
    geo: { lat },
  },
} = users;
console.log(lat, companyName);

const s = {
  0: "S-name",
};

const sarr = [2, 3, 5];

console.log(s[0]);
console.log(sarr[0]);

console.clear();

const student2 = {
  0: 24,
  1: 90,
};

const { 1: oneAgain } = student2;

console.log(oneAgain);
const array = [101, 102, 103, 104, 105];

const { 0: oneZeroOne, 4: oneZeroFive } = array;

// const [oneZeroOne, , , , oneZeroFive] = array;

console.log(oneZeroOne, oneZeroFive);

const a = [2342, 342, 34, 234, 34];

console.log([...a] === a);

const obj = {
  name: "ff",
  d: 343,
};

console.log({ ...obj } == obj);

const { log } = console;

console.log(console);

log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
log("sfsdf");
