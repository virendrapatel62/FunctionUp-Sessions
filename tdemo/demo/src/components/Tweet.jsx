import React from "react";

import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

export function FeedCard(props) {
  const tweet = props.tweet;
  return (
    <div className="shadow shadow-sm p-3 mt-4">
      <h3>{tweet.tweetedBy.name}</h3>
      <p>{tweet.content}</p>
      <img
        onDoubleClick={props.onToggleLike}
        className="img img-fluid hand"
        src={tweet.image}
        alt=""
        srcset=""
      />

      <div className="row mt-3 p-2">
        <div className="col hand">
          <span onClick={props.onToggleLike}>
            {tweet.isLiked ? (
              <AiFillHeart size={25} className="m-2" color="red" />
            ) : (
              <AiOutlineHeart size={25} />
            )}
          </span>
          {tweet.likeCount}
        </div>
        <div className="col hand">
          <FaComment size={25} className="m-2" />
          {tweet.commentCount}
        </div>
        <div className="col hand">
          <AiOutlineRetweet size={25} className="m-2" />
          {tweet.reTweetsCount}
        </div>
      </div>
    </div>
  );
}
