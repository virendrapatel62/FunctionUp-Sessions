class Human {
  numberOfEyes = 2;
  brain = 40;

  get _brain() {
    return this.brain;
  }
  constructor(brain) {
    console.log("Human Constructor...", brain);
    this.brain = brain;
  }
  walk() {
    console.log("human is walking");
  }
}
class Student extends Human {
  #name = "no-name";
  age = 24;
  brain;

  constructor(name) {
    super(23);
    this.#name = name;
    this.brain = 80;
    console.log("Student Constructor....");
  }

  getBrain() {}

  getFullName() {
    return this.#name;
  }
}

const student = new Student("Virendra");
console.log(student.getFullName());
console.log(student);
student.getBrain();

// class Student {
//   name = "no-name";
//   age = 24;

//   getFullName() {
//     return this.name;
//   }
// }

// Object.assign(Student.prototype, Human.prototype);

// console.log(typeof Student);
