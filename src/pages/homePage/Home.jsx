
import LeftSideBar from "../../component/leftsidebar/Leftsidebar";
import RightSideBar from "../../component/rightSidebar/RightSideBar";
import LiveTweet from "../../component/liveTweet/LiveTweet";
import style from "./home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.sidebar}>
          < LeftSideBar />
      </div>

      <div className={style.mainContainer}>
        <LiveTweet />
      </div>
      <div>
 < RightSideBar />
      </div>
    </div>
  );
};

export default Home;


//jjjj