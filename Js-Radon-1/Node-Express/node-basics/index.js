const fs = require("fs/promises");
const path = require("path");

// const { infoLogger } = require("./logger"); //log
// const factorial = require("factorial");

// infoLogger("THis is message from another module");

// console.log(factorial(4));

fs.readdir(__dirname)
  .then((result) => {
    console.log("Got all the files");
    console.log(result);
  })
  .catch(console.log);

// fs.readFile(path.join(__dirname, "package.json"), (error, result) => {
//   console.log(result.toString());
// });

// console.log(path.join(__dirname, "../"));
// fs.readdir(path.join(__dirname, "../../../../../"), (error, result) => {
//   console.log("Got all the files");
//   console.log(result);
// });
