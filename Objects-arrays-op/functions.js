// console.log("Function JS");

function sendEmail(greeting, email) {
  console.log(`Sending ${greeting} to ${email}`);
}

function getGreeting(greeting, username) {
  return `${greeting} 🙏 ${username}`;
}

const greeting = getGreeting("Good Morning", "Virendra");
// getGreeting("Hello", "Atul");
// getGreeting("Good Night", "Harsh");
sendEmail(greeting, "patelvirendra62@gmail.com");
console.log(greeting);

function avc() {
  console.log();
}

avc();
