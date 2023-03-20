const virendra = {
  name: "Virendra",
  age: 25,
  getName: function () {
    console.log(this.name);
  },
  run: function () {
    console.log("Running");
  },
};
const sandeep = {
  name: "Sanddep",
  age: 25,
  getName: function () {
    console.log(this.name);
  },
  run: function () {
    console.log("Running");
  },
};
const harsh = {
  name: "HArsh",
  age: 25,
  getName: function () {
    console.log(this.name);
  },
  run: function () {
    console.log("Running");
  },
};

console.log({
  virendra,
  sandeep,
  harsh,
});
