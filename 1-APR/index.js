// const apiResponsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

// apiResponsePromise
//   .then((result) => {
//     return result.json();
//   })

//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {});

// async function task() {
//   const response = await apiResponsePromise;
//   const json = await response.json();
//   console.log(json);
// }

// task();

// const counterPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });

// console.log("Counter");
// counterPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error ");
//   });

// console.log("......");
// console.log("......");
// console.log("......");
// console.log("......");
// console.log("......");

const is18 = (user, callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(true);
    }, 2000);
  });
};

const userr = { user: "viren" };
console.log(userr);

async function task() {
  const value = await is18(userr);
  console.log(value);
}

task();
