import React, { useState, useEffect } from "react";
import Tweet from "../liveTweetFeed/Tweet";
import { useDispatch, useSelector } from "react-redux";
import { TweetSlice } from "../storeComponent/reducer";
import style from "./LiveTweet.module.css";
import FlipMove from "react-flip-move";
import PostTweet from "../postTweet/PostTweet";


function LiveTweet() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/Tweet.json")
      .then((res) => res.json())
      .then((res) => dispatch(TweetSlice.actions.AddAllTweet(res)));
  }, []);

  const TweetData = useSelector((state) => state.Tweets);

  return (
    <div className={style.feed}>
      <div className={style.feed__header}>
        <h2>Home</h2>
      </div>

      <PostTweet />

      <FlipMove>
        {
          TweetData.map((tweet,index)=>{
            return (
              <Tweet key={index} tweet={tweet} index={index} />

            )
          })
        }
      </FlipMove>
    </div>
  );
}

export default LiveTweet;
