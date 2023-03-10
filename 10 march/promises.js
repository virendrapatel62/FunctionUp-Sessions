const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/photos";

const responsePromise = axios.get(url);
console.log(responsePromise);

// responsePromise
//   .then((response) => {
/**
 */
//     console.log("Got the Photos from server", response.data[0]);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function getData() {
  const response = await responsePromise;
  console.log(response);
}

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

getData();
