// console.log(this);
// console.log(globalThis);
// console.log(globalThis == this);

function sayHello() {
  console.log(this);
}
//
// sayHello();

// console.log(global === globalThis);

const student = {
  name: "virendra",
  getThis: function () {
    console.log(this);
  },
  getAnotherThis: () => {
    console.log(this);
    // this will print parant
    // function's this value
  },
};

function Student() {
  console.log(this);
  this.name = "virnedta";
  this.age = 24;

  this.getInfo = function () {
    console.log("getInfo", this);
  };
}
const s1 = new Student();

function doThis(task) {
  task();
}

// doThis(s1.getInfo.bind(s1));

const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

// responsePromise.then();
