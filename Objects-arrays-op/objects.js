// console.log("Objects Js ");

// const obj = {
//   name: "virnedra",
//   age: 24,
//   24: 23,
// };

// console.log(obj.age);
// console.log(obj.name);
// console.log(obj["24"]);

// const { name, age } = obj;

// console.log({ name, age });

// const student = {
//   name: "virnedra",
//   age: 24,
//   address: {
//     state: {
//       id: 1,
//       name: "MP",
//     },
//     city: {
//       id: 34,
//       name: "Jabalpur",
//     },
//   },
// };

// const {
//   name,
//   address: {
//     state: { name: stateName },
//     city: { name: cityName },
//   },
// } = student;
// console.log(name, cityName, stateName);

// const emp = {
//   empName: "Virendra",
//   phone: {
//     extention: "+91",
//     number: "89894487",
//   },
// };

// const number = emp.phone.number;
// const extention = emp.phone.extention;

// const {
//   phone: { extention, number },
// } = emp;
// // const { number, extention } = phone;
// console.log();

// const phoneNumber = extention + number;

// console.log(phoneNumber);

// const array = [1, 2, 3, 4, 5, 6];
// const names = ["virendra", "atul", "harsh", "pallavi", "som-939"];

// const first = names[0];
// const second = names[1];
// const third = names[2];
// const fourth = names[3];

// const [first, second, third, fourth] = names;
// const [first, , , , , fourth] = names;

// const { length, 1: first, 3: fourth } = names;

// {
//      1: 'value', 2 : value , 3 : value
// }

// console.log(length);
// console.log({
//   first,
//   //   second,
//   //   third,
//   fourth,
// });

const temp = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" }, // this is the goal
      { id: "1004", type: "Devil's Food" },
    ],
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};

// const {
//   batters: {
//     batter: [, , { id, type }],
//   },
// } = temp;

const {
  batters: {
    batter: {
      2: { type },
    },
  },
} = temp;

console.log(type);
