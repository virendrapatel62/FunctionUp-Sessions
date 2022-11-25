const student = {
  name: "virendra",
  age: 24,
};
// const name = student.name;
// const age = student.age;
// const { name, age } = student;
// console.log({ name, age });

// const meeting = {
//   student: student,
//   address: {
//     state: {
//       id: 1,
//       name: "MP",
//     },
//     city: {
//       id: 23,
//       name: "Jabalpur",
//     },
//   },
// };

// const {
//   student: { name },
//   address: {
//     state: { name: stateName },
//     city: { name: cityName },
//   },
// } = meeting;

// console.log({ name, stateName, cityName });

const meeting = {
  students: [
    {
      student: student,
      address: {
        state: {
          id: 1,
          name: "MP",
        },
        city: {
          id: 23,
          name: "Jabalpur",
        },
      },
    },

    {
      student: {
        name: "Harsh",
      },
      address: {
        state: {
          id: 3,
          name: "Up",
        },
        city: {
          id: 3,
          name: "LK",
        },
      },
    },
  ],
};

// const name1 = meeting.students[0].student.name;
// const name2 = meeting.students[1].student.name;

// const city1 = meeting.students[0].address.city.name;
// const city2 = meeting.students[1].address.city.name;

const {
  students: [
    {
      student: { name: name1 },
      address: {
        city: { name: city1 },
      },
    },
    {
      student: { name: name2 },
      address: {
        city: { name: city2 },
      },
    },
  ],
} = meeting;

// console.log({ name1, name2, city1, city2 });

const names = ["Virendra", "Sandeep", "Harsh", "Akshya", "Kesav", "Samir"];

// const [virendra, sandeep, ...other] = names;
// console.log(virendra, sandeep, other);

// const [virendra, , , , harsh] = names;

const { 2: harsh, length } = names;

console.log(harsh, length);
