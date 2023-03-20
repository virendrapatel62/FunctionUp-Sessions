class Person {
  name = "";
  age = 0;
  constructor(name) {
    this.name = name;
  }

  write() {
    throw new Error("Implement This in Child class.");
  }
}

class Teacher extends Person {
  write() {
    console.log("Teacher IS Writing");
  }
}

class Student extends Person {
  age = 18;

  write() {
    console.log("Student IS Writing");
  }
}

const harsh = new Student("Harsh");
const sandeep = new Student("Sandeep");

const t1 = new Teacher("Virendra", 24);

sandeep.write();
harsh.write();

t1.write();
