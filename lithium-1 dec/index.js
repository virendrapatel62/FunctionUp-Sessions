const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

mongoose
  .connect("mongodb://localhost:27017/1-dec")
  .then(() => {
    console.log("Connectd...");
  })
  .catch((error) => {
    console.log(error.message);
  });

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  amount: {
    type: Number,
    default: 0,
  },
});

const Student = mongoose.model("Student", studentSchema);

const student = new Student({
  name: "Sohan",
  age: 21,
  amount: 400,
});

// student.save().then((user) => {
//   console.log(user);
// });

// Student.create([
//   {
//     name: "virendra2",
//     age: 23,
//   },
//   {
//     name: "Sandeep",
//   },
// ]).then((user) => {
//   console.log(user);
// });

async function getStudents() {
  const students = await Student.find();
  const count = await Student.count(); // deperecate
  const _count = await Student.countDocuments();
  console.log(students);
  console.log(students.length, count);
}

// getStudents();

async function getStudent() {
  let student = await Student.findOne({
    name: "updated name",
  }).select("name -_id");
  // const student = await Student.findOne();
  //   console.log(student);
  //   student.name = "updated name";
  //   await student.save();
  //   student = await Student.findOne();
  console.log(student);
  //   console.log(student._id);
}

// getStudent();

async function updateStudent() {
  //   const updateResult = await Student.updateOne(
  //     {
  //       name: "Mohan",
  //     },
  //     {
  //       $set: {
  //         name: "Mohan",
  //       },
  //     }
  //   );

  const updatedStudent = await Student.findOneAndUpdate(
    {
      _id: "6388bb9328c4e6d08fd31b45",
    },
    {
      $set: {
        name: "Virendra",
      },
    },
    {
      new: true,
    }
  );

  console.log(updatedStudent);
}

// updateStudent();

// Student.deleteMany().then(console.log);

// Student.find({ age: 21 }).select("age amount -_id").then(console.log);

// Student.find({ age: 21 })
//   .select("amount")
//   .then((students) => {
//     let sum = 0;

//     students.forEach((student) => {
//       sum = sum + student.amount;
//     });

//     console.log(sum);
//   });

// Student.aggregate([
//   {
//     $match: {
//       age: 21,
//     },
//   },
//   {
//     $group: {
//       _id: "$age",
//       totalAmount: {
//         $sum: "$amount",
//       },
//       count: {
//         $sum: 1,
//       },
//     },
//   },
// ]).then(console.log);

// Student.deleteMany().then();
//

const studentPlainObjects = new Array(100).fill().map(() => {
  const name = faker.name.fullName();
  const age = faker.datatype.number(10, 100);
  const amount = faker.datatype.number(100, 10000);

  return {
    name,
    age,
    amount,
  };
});

// console.log(studentPlainObjects);

// Student.create(studentPlainObjects).then(console.log);

// [
//   { name: "Rudy Hackett" },
//   { name: "Mr. Irene Okuneva" },
//   { name: "Beatrice Effertz" },
//   { name: "Miss Melinda Gleichner" },
//   { name: "Max McCullough DVM" },
// { name: 'Marguerite Huel' },
//   { name: 'Annette Brekke' },
//   { name: 'Marie Gleichner' },
//   { name: 'Flora Hyatt' },
//   { name: 'Frank Ondricka' }
// ];
const page = 3;
const limit = 50;
const skip = (page - 1) * limit;
// 1, 2, 3, 4,5, 6, 7, 8, 9, 10
Student.find().limit(limit).skip(skip).select("name -_id").then(console.log);
