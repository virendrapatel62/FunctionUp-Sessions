function sayHello() {
  console.log("Saying Hello");
}

function giveMeInput(input) {
  console.log(input);
}

const callMeToSayHello = sayHello;

// giveMeInput(callMeToSayHello);

callMeToSayHello();

console.log(sayHello);
console.log(callMeToSayHello);

console.log(sayHello == callMeToSayHello);

console.log("-----------");
function getLogger(type) {
  function log(input) {
    if (type === "error") {
      console.log(input, "ERROR :(");
    } else {
      console.log(input, "INFO :)");
    }
  }
  return log;
}

const infoLogger = getLogger("info"); // return new log
const errorLogger = getLogger("error"); // return new log

infoLogger("INFO");
infoLogger("INFO");
infoLogger("INFO");
infoLogger("INFO");

infoLogger("INFO");
errorLogger("EROR");
errorLogger("EROR");
errorLogger("EROR");
errorLogger("EROR");

// const log = getLogger("info"); // function

// log("After calling get logge");
// log("it is cool");

function log(input, type) {
  if (type == "info") return console.log(input, type);

  console.error(input, "THis is error message");
}

function error(input) {
  console.error(input, "Error");
}

function info(input) {
  console.log(input);
}

// log("this is Error", "error");
// log("this ios general info", "info");
// log("12", "info");
// log(234, "info");
// log(5435, "info");
// log(3454, "info");

// info(123);
// info(123);
// info(123);
// info(123);

// error("Error");
// error("404 error");
// error("500 error");

function a(input1) {
  // 2
  return function b(input2) {
    // 3
    return function c(input3) {
      // 5
      return input1 + input2 + input3;
    };
  };
}

// const addWith2 = a(2);

// const addWith3 = addWith2(3); // 5

// const ans = addWith3(5); //5

// console.log(ans);

console.log(a(10)(10)(20));
