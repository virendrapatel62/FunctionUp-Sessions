const sum = (a) => {
  return (b) => (c) => a + b + c;
};

console.log(sum(1)(2)(3));

const logger = (type, message) => {
  if (type === "error") {
    console.error(type, message);
  }
  if (type === "info") {
    console.log(type, message);
  }
};

const loggerWithClosure = (type) => {
  return (message) => {
    if (type === "error") {
      console.error(type, message);
    }
    if (type === "info") {
      console.log(type, message);
    }
  };
};

logger("info", "all good");
logger("error", "Not found");

const errorLogger = loggerWithClosure("error");
const infoLogger = loggerWithClosure("info");

errorLogger("Error");
errorLogger("Error");
errorLogger("Error");
errorLogger("Error");
infoLogger("INfo");
infoLogger("INfo");
infoLogger("INfo");
infoLogger("INfo");
