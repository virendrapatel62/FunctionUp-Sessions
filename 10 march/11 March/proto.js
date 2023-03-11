const vehicle = {
  name: "General",
  start() {
    console.log("Starting...", this.name);
  },

  stop() {
    console.log("stopped", this.name);
  },
};

const twoWheeler = Object.create(vehicle);

const fourWheeler = {
  name: "4",
};

vehicle.start();
vehicle.stop();

twoWheeler.start();
twoWheeler.stop();

vehicle.something = () => {};

twoWheeler.something();

console.clear();

const a = {
  a() {
    console.log("A from a proto");
  },
};

const b = {
  b() {
    console.log("B from b proto");
  },
};

const c = Object.create(Object.assign(a, b));

console.log(c.__proto__);

c.a();
c.b();

console.clear();

class A {
  a() {}
}

class B {
  b() {}
}

class C extends A {
  #c = 90;

  getC() {
    return this.#c;
  }
}

console.log(new C().getC());

[].__proto__.sum = function () {
  return this.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.sum();

const arr = new Array(23, 32);

console.log(arr.sum());

console.clear();

[].__proto__.pop = function () {
  this.push(90);
};

const arr2 = [];

arr2.push(24);
arr2.push(24);
arr2.push(24);
arr2.push(24);
arr2.push(24);

arr2.pop();

console.log(arr2);
