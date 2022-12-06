// //* higher order
// function sendEmail(callback) {
//   console.log("Sending.. email");
//   callback();
// }

// //* callback
// function showPopop() {
//   console.log("Email Sent..");
// }

// sendEmail(showPopop);
function counter() {
  let count = 0;

  function inc() {
    count++;
  }

  function dec() {
    count--;
  }
  function getCount() {
    return count;
  }

  const returnValue = {
    inc: inc,
    dec: dec,
    getCount,
  };

  return returnValue;
}

const result = counter();

result.inc();
result.inc();
console.log(result.getCount());
result.dec();
console.log(result.getCount());
