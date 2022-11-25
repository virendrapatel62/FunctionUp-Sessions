class Student {
  #name;

  constructor(name) {
    this.#name = name;
  }

  #thisIsPrivate() {
    console.log("Private");
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#thisIsPrivate();
    if (!value) throw new Error("Please provide valid value");
    this.#name = value;
  }
}

const student = new Student("Virnedra");

console.log(student.name);

student.name = "Sandeep";

console.log(student.name);
