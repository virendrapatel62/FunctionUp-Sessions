// const loginUser = (callback) => {
//   console.log("Login Sucesss");
//   callback();
// };

// const sendEmail = () => {
//   console.log("Sending Emials");
// };
// const logToDb = () => {
//   console.log("Logging to Db");
// };

// loginUser(sendEmail);
// loginUser(logToDb);

// setTimeout(() => {
//   console.log("After 2 sec");
// }, 2000);

const getUser = (callback) => {
  console.log("Fetching User.....");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "virendra",
        id: 2,
      });
    }, 2000);
  });
};

const getPostsByUserId = (userid, callback) => {
  console.log("Fetching posts..");
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { title: "5", id: "2" },
        { title: "554", id: "3" },
        { title: "4dfgd", id: "4" },
      ]);
    }, 2000)
  );
};

async function getPosts() {
  const user = await getUser();
  const posts = await getPostsByUserId(user.id);
  console.log(posts, user);
}

getPosts();
