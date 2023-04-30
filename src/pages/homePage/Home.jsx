import LeftSideBar from "../../component/leftsidebar/Leftsidebar";
import RightSideBar from "../../component/rightSidebar/RightSideBar";
import LiveTweet from "../../component/liveTweet/LiveTweet";
import style from "./home.module.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.logged);
  useEffect(() => {
    console.log("home useEffect run", auth);
    if (!auth?.isLoggedIn) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <div className={style.homeContainer}>
      <div className={style.sidebar}>
        <LeftSideBar />
      </div>

      <div className={style.mainContainer}>
        <LiveTweet />
      </div>
      <div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;

//jjjj
