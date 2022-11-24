// import fetch from "node-fetch";

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const json = await response.json();
//   console.log(json);
// }

// getData();

// console.log("After Data");

// // responsePromise.then((response) => console.log(response));

class User {
  constructor() {}

  wait(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Sucess");
      }, sec * 1000);

      if (!sec) reject(new Error("Pass sec value"));
    });
  }

  do() {}
}

const user = new User();

user
  .wait()
  .then(() => console.log("Successs "))
  .catch((error) => console.log(error.message));
