class Person {
  name = "";
  age = 0;
  constructor(name) {
    this.name = name;
  }

  write() {}
}

class Teacher extends Person {}

class Student extends Person {}

const harsh = new Student("Harsh");
const sandeep = new Student("Sandeep");

const t1 = new Teacher("Virendra", 24);

sandeep.write();
harsh.write();
t1.write();
