function sayHello(a, b) {
  console.log(this);
  console.log(this.name + " Hello", a, b);
}

const student = {
  name: "Virendra",
};

const binedFunction = sayHello.bind(student); // returns a new Fucntion
binedFunction(12, 14);

sayHello.call(student, 12, 13); // calls the fucntion

sayHello.apply(student, [12, 14]);
