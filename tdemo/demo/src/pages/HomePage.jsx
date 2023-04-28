import React, { useEffect } from "react";
import { constSelector, useRecoilValue, useSetRecoilState } from "recoil";
import { tweetsAtom } from "../recoil/tweets";
import { authAtom, usersAtom } from "../recoil/users";
import { FeedCard } from "../components/Tweet";
import { useNavigate } from "react-router-dom";

function Feeds() {
  const tweets = useRecoilValue(tweetsAtom);
  const setTweets = useSetRecoilState(tweetsAtom);

  function toggleLike(index) {
    console.log(`like this tweet , ${index}`);

    const tweet = { ...tweets[index] };

    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    updated[index] = tweet;
    setTweets(updated);
  }

  return (
    <div>
      <h1>Feeds</h1>
      <hr />
      {tweets.map((tweet, index) => (
        <FeedCard
          onToggleLike={() => toggleLike(index)}
          key={tweet.id}
          tweet={tweet}
        />
      ))}
    </div>
  );
}

function TweetForm() {
  const setTweets = useSetRecoilState(tweetsAtom);
  const [tweet, setTweet] = React.useState({
    id: Date.now(),
    content:
      "Aspernatur accusamus porro perspiciatis occaecati assumenda modi. Eaque nesciunt quisquam quidem enim rem. Ab corrupti atque vero quos sed facilis odit nemo voluptas. Illo distinctio dolore accusantium. Sequi deserunt qui debitis explicabo. Ipsa atque suscipit repudiandae velit architecto.",
    createdAt: "2022-09-10T07:47:45.804Z",
    image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    tweetedBy: {
      id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
      name: "Verna Pouros",
    },
    likeCount: 563,
    commentCount: 504,
    reTweetsCount: 63,
    isLiked: false,
  });

  const handlSubmit = (event) => {
    event.preventDefault();
    setTweets((tweets) => {
      return [tweet, ...tweets];
    });
  };

  const handleChange = (event) => {
    setTweet({
      ...tweet,
      [event.target.name]: event.target.value,
      image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    });
  };

  return (
    <form onSubmit={handlSubmit}>
      <textarea
        onChange={handleChange}
        name="content"
        className="form-control"
      ></textarea>
      <button className="btn btn-success" type="submit">
        Tweet
      </button>
    </form>
  );
}

export default function HomePage() {
  const users = useRecoilValue(usersAtom);
  const auth = useRecoilValue(authAtom);
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (!auth?.isLoggedIn) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <div className="container">
      <h1>Home Page</h1>

      <button
        onClick={() => {
          setAuth({
            isLoggedIn: false,
            user: null,
          });
        }}
      >
        logout
      </button>
      <hr />

      <div>
        <div className="row">
          <div className="col-3 border border-dark">
            <SideBar />
          </div>
          <div className="col-6 border border-dark">
            <TweetForm />
            <hr />
            <Feeds />
          </div>
          <div className="col-3 border border-dark">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  );
}

function RightSideBar() {
  return (
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  );
}
