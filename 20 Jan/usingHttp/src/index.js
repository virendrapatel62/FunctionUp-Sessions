const http = require("http");

console.log(http);

const server = http.createServer((request, response) => {
  console.log("Request ....");
  if (request.url === "/courses") {
    response.write(JSON.stringify(["Angular", "React"]));
    response.end();
    return;
  }

  response.write("Hello world..");
  response.end();
});

server.listen(3000);
