const { waitFor } = require("./waitFor");

// Scope Examples
{
  // {
  //   console.log("inside scope");
  //   console.log("inside scope");
  //   {
  //     const a = 90;
  //     console.log(a);
  //   }

  //   console.log(a);
  // }

  var name = "Virendra";

  console.log(globalThis); // check in browsers and node js as well.

  console.clear(0);

  function sayHello() {
    var insideSayHello = 90;

    console.log(innerVar);
    function innerFunction() {
      var innerVar = 92;
      console.log(insideSayHello);
    }

    var innerVar = 92;

    //   console.log(innerVar);

    innerFunction();
  }

  sayHello();

  // console.log(insideSayHello);

  console.clear();

  function A() {
    let sameName = 90;
    function B() {
      // let sameName = 91;
      for (let i = 0; i < 1; i++) {
        sameName = 92;
        if (true) {
          // let sameName = 93;
          console.log({ iff: sameName });
        }
        console.log({ forloop: sameName });
      }
      console.log({ B: sameName });
    }
    console.log({ A: sameName });

    B();
  }

  A();
}

console.clear();
// Event Loops
{
  // console.log("Hello");
  // setTimeout(() => {
  //   console.log("Timeour end");
  // }, 0);
  // new Promise((resolve) => {
  //   // waitFor(4);
  //   resolve("After 4 Promise");
  // }).then(console.log);
  // queueMicrotask(() => {
  //   console.log("World...");
  // });
  // console.log("World...");
}

const getRepo = (user) => {
  return new Promise((resolve) => {
    resolve({
      respos: [2, 23, 43],
    });
  });
};

const getUser = () => {
  return new Promise((resolve) => {
    resolve({
      id: 1,
    });
  });
};

getUser()
  .then((user) => getRepo(user))
  .then((response) => {
    return Promise.resolve(2);
  })
  .then((two) => {
    console.log(two);
  })
  .then((tree) => {
    console.log(tree);
    return 3;
  })
  .then(console.log);
