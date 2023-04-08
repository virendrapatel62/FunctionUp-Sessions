// setTimeout(() => {
//   console.log(Math.random());
//   console.log(Math.random());
//   console.log(Math.random());
//   console.log(Math.random());
//   console.log(Math.random());
// }, 5000);

// const time = Date.now();
// console.log("In loop");
// // while (Date.now() < time + 5000) {
// //   //   console.log("In loop");
// // }
// console.log("after loop");
// console.log("Middle");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

function getUsers(callback) {
  setTimeout(() => {
    users = ["Virendra"];
    callback(users);
  }, 3000);
}
function getGitProfile(name, callback) {
  console.log("Fetching git for", name);
  setTimeout(() => {
    callback({
      username: "abc",
    });
  }, 3000);
}

function getRepos(username, callback) {
  console.log("Fetching repo for", username);
  setTimeout(() => {
    callback([1, 2, 3]);
  }, 3000);
}

getUsers((users) => {
  console.log({ users });
  getGitProfile(users[0], (profile) => {
    console.log({ profile });
    getRepos(profile.username, (repos) => {
      console.log({ repos });
    });
  });
});

console.log("After getUsers");
