const student = {
  address: {
    city: "JBP",
    state: "MP",
  },
  name: "Virendra Kumar",
};

// const studentCopy = { ...student, address: { ...student.address } };

const studentCopy = JSON.parse(JSON.stringify(student));

student.address.city = "Indore";

console.log(student.address == studentCopy.address);

console.log({
  student,
});

console.log({
  studentCopy,
});
