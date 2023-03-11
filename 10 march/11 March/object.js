const student = {
  age: 24,
  name: "Virendra",

  createGreeting: function () {
    return `Hello ${this.name}`;
  },
  createAnothoerGreeting() {
    return `Hello ${this.name}`;
  },

  /**
   * @param zero params
   * @returns returns the greeting
   * @description do not code like this, this will not be accible here
   */
  createOneMoreGreeting: () => {
    return `Hello ${this.name}`;
  },
};

console.log({ student });

console.log(student.createGreeting());
console.log(student.createAnothoerGreeting());
console.log(student.createOneMoreGreeting());

console.clear();

const myProto = {
  name: "virendra",
};

const obj = {};

Object.setPrototypeOf(obj, myProto);

console.log({ obj });
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
