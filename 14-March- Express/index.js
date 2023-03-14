const http = require("http");

console.log(http);

const requestHandler = (request, response) => {
  console.log(request.url);
  const { url } = request;
  if (url === "/" && request.method == "GET") {
    response.write("<h1>Homepage</h1>");
    response.end();
    return;
  }
  if (url === "/courses") {
    response.write("<h1>Courses  <a href='/'>Go To HOME</a></h1>");
    response.end();
    return;
  }
};

const server = http.createServer(requestHandler);
server.listen(3000);
