class Counter {
  #count = 0;
  constructor() {
    this.#count = 0;
  }
  get count() {
    return this.#count;
  }
  inc() {
    this.#count++;
  }
  dec() {
    this.#count--;
  }
}

const counter = new Counter();

counter.inc();
counter.inc();
counter.inc();
counter.inc();
// counter.count = 90;
counter.inc();
counter.inc();
counter.dec();
counter.dec();
counter.dec();

console.log(counter.count);
