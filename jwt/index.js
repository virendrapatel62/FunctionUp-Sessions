const jwt = require("jsonwebtoken");

const key = "something";
const token = jwt.sign("virendra", key);

// console.log(
//   jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlyZW5kcmEgcGF0ZWwgc29tZXRpbmcgZWxzIiwiYWdlIjoyNCwiaWF0IjoxNjY3NTY5MjkyfQ.tL-Igxhh0Fvhh5X8_Kp0vQE5R4FfJqcnoaZpGCnydhY",
//     key
//   )
// );
