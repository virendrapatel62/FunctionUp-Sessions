const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userName: "Virendra",
        age: 24,
      });
    }, 2000);
  });

const getRepos = (username) =>
  new Promise((resolve, reject) => {
    if (!username) {
      reject(new Error("Username required"));
    }
    setTimeout(() => {
      resolve([]);
    }, 2000);
  });

console.log("Consuming Promise");

// getUser()
//   .then((user) => {
//     console.log({ user });
//     return getRepos();
//   })
//   .then((repos) => {
//     console.log(repos);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

async function doIt() {
  try {
    const users = await getUser();
    console.log({ users });
    const repos = await getRepos();
    console.log({ repos });
  } catch (error) {
    console.log(error.message);
  }
}

doIt();
