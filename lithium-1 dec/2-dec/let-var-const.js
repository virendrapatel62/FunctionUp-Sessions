var axios = require("axios");

var getCourses = function () {
  return axios
    .get("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "accept-encoding": "*",
      },
    })
    .then(function (response) {
      return response.data;
    });
};
getCourses().then(function (courses) {
  console.log(courses);
});
