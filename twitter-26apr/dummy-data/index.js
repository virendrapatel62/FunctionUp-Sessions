const { faker } = require("@faker-js/faker");
const fs = require("fs");

const tweets = new Array(500).fill(0).map((i, index) => {
  return {
    id: faker.datatype.uuid(),
    content: faker.lorem.paragraphs(1),
    createdAt: faker.date.past(),
    image: `https://picsum.photos/1000/500?q=${index}`,
    tweetedBy: {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
    },
    likeCount: faker.datatype.number({ min: 0, max: 1000 }),
    commentCount: faker.datatype.number({ min: 0, max: 1000 }),
    reTweetsCount: faker.datatype.number({ min: 0, max: 200 }),
    isLiked: faker.datatype.boolean(),
  };
});

const users = new Array(50).fill(0).map((i, index) => {
  return {
    image: `https://i.pravatar.cc/150?img=${index}`,
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  };
});

fs.writeFile("tweets.json", JSON.stringify(tweets), () => {
  console.log("done");
});
fs.writeFile("users.json", JSON.stringify(users), () => {
  console.log("done");
});
