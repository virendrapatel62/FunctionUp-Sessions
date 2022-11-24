const student = {
  name: "virnedra",
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};

function fun(input, input2) {
  console.log(this.name, input, input2);
}

// fun(12);

const student2 = { name: "sandeep" };
fun.call(student2, 12, 13); // call the fun

fun.apply(student2, [12, 134]); // call the fun

const bindedThis = fun.bind(student2); // will not call, return the fun
bindedThis(12, 14);

class Student {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this?.name} is speaking..`);
  }
}

const s = new Student("Virnedra");

s.speak();

const speakLater = s.speak.bind(s);

console.log(speakLater());
