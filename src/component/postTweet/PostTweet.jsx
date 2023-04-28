import style from "./PostTweet.module.css";
import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { TweetSlice } from "../storeComponent/reducer";

function PostTweet() {
  const dispatch = useDispatch();
  const [tweetdata, setTweetdata] = useState({
    id: Math.floor(Math.random() * 100000 + 1),
    content: "",
    createdAt: Date.now(),
    image: "",
    tweetedBy: {
      id: Math.floor(Math.random() * 100000 + 1),
      name: "Avatar",
    },
    likeCount: 0,
    commentCount: 0,
    reTweetsCount: 0,
    isLiked: false,
  });

  const handleChang = (e) => {
    const { value } = e.target;
    setTweetdata({
      ...tweetdata,
      content: value,
    });
  };

  const handleImage = (e) => [
    setTweetdata({
      ...tweetdata,
      image: e.target.value,
    }),
  ];

  const handleSubmit = (e) => {
    dispatch(TweetSlice.actions.addTweet(tweetdata));
    setTweetdata({
        ...tweetdata,
        image:"",
        content:""
    })
  };
  return (
    <div className={style.tweetBox}>
      {/* <form onSubmit={handleSubmit}> */}
      <div className={style.tweetBox__input}>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

        <input
          onChange={handleImage}
          placeholder="Enter Image Link"
          type="text"
          value={tweetdata}
        />
      </div>

      <textarea
        placeholder="What's happening?"
        rows={2}
        style={{ marginLeft: "5rem", outline: "none", fontSize: "20px" }}
        className={style.tweetBox__imageInput}
        onChange={handleChang}
      />

      <Button
        disabled={tweetdata.content.length === 0}
  
        type="submit"
        className={style.tweetBox__tweetButton}
        onClick={handleSubmit}
      >
        Tweet
      </Button>
    </div>
  );
}

export default PostTweet;
