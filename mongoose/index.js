const mongoose = require("mongoose");
const { SchemaTypes } = mongoose;
mongoose
  .connect("mongodb://localhost:27017/function-up-29-nov")
  .then((result) => {
    console.log("Connnected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

async function getAll() {
  const students = await Student.find();
  console.log(students);
}

// getAll();

async function getStudentByEmail() {
  const student = await Student.findOne({
    email: "patelvirendra62@gmail.com",
  });
  console.log(student);
}
// getStudentByEmail("patelvirendra62@gmail.com");

function createStudent(name, email) {
  Student.create([
    {
      name,
      email,
    },
  ])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// createStudent(
//   "Virendra",
//   `patelvirendra${~~(Math.random() * 1000000)}@gmail.com`
// );

async function getStudentById(id) {
  //   const student = await Student.findOne({
  //     id: id,
  //   });
  const student = await Student.findById(id);
  console.log(student);
}

async function getCount(email) {
  const count = await Student.find({
    email: email,
  }).count();
  console.log({ count });
}

// getCount("patelvirendra62@gmail.com");

async function updateById(id, newName) {
  const update = await Student.findOneAndUpdate(
    {
      id: id,
    },
    {
      $set: {
        name: newName,
      },
    }
    // {
    //   new: true,
    // }
  );
  console.log({ updatedObject: update });
}

// updateById("638618eba60ebe173830191b", "new NAme");
// getStudentById("638618eba60ebe173830191b");

async function deleteStudent(id) {
  //   const deleteResult = await Student.deleteOne({ id: id });

  const deleteResult = await Student.findOneAndDelete({ _id: id });
  console.log({ deleteResult });
}

// deleteStudent("63861978f199a023e98a0e5f");
getStudentById("63861978f199a023e98a0e5f");
