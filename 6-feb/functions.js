// function sayHello(message, somthingelse) {
//   console.log(this);
//   console.log(`${message} ${this.name}`, somthingelse);
// }

// const bindedSayHello = sayHello.bind({ name: "Virendra" });

// bindedSayHello("Hello 1", 32);

// sayHello.call({ name: "Harsh" }, "Hello 2", 89);

// sayHello.apply({ name: "Sandeeep" }, ["hello2", 89]);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  run() {
    console.log(`${this?.name} is Running, whose age is ${this?.age}`);
  }
  draw() {
    console.log(`${this?.name} is Drawing, whose age is ${this?.age}`);
  }
}

class Sports {
  constructor() {
    this.registeredTasks = [];
  }
  participate(task) {
    this.registeredTasks.push(task);
    console.log(`task is registered`);
  }

  start() {
    this.registeredTasks.forEach((task) => {
      task();
    });
  }
}

const virendra = new Student("Virendra", 24);
const sandeep = new Student("Sandeep", 24);
const sports = new Sports();

sports.participate(virendra.run.bind(virendra));
sports.participate(sandeep.run.bind(sandeep));

sports.participate(virendra.draw.bind(virendra));
sports.participate(sandeep.draw.bind(sandeep));

sports.start();
