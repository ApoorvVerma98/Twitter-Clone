import React, { useState } from "react";
import styles from "./LeftBarMenu.module.css";
import { NotificationsOutlined } from "@mui/icons-material";
import { BiHash } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, DialogActions } from "@mui/material";
import { TweetSlice } from "../storeComponent/reducer";
import { useDispatch } from "react-redux";
import PopOver from "./UserPopOver";
import {BsTwitter} from 'react-icons/bs';
import { NavLink } from "react-router-dom";



 
function LeftBarMenu() {
  const Dispatch = useDispatch()

  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState({
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

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTextchange = (e) => {
    const { value } = e.target;
    setText({
      ...text,
      content: value,
      image:`https://picsum.photos/1000/500?q=${Math.floor(Math.random()*9+1)}`
    });
  };

  const hadleTweet = () => {
    Dispatch(TweetSlice.actions.addTweet(text))
    setToggle(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__item}>
        <div className={styles.twitterLogoDiv}>
        <NavLink to="/">
          <BsTwitter className={styles.twitterLogo} />
        </NavLink>        </div>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <BiHomeCircle style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Home</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <BiHash  style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Explore</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <NotificationsOutlined style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Notifications</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <MdOutlineMail style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Messages</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <BsBookmark style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Bookmarks</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <IoPerson style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>Profile</span>
      </div>
      <div className={styles.sidebar__item}>
        <div className={styles.sidebar__icon}>
          <CgMoreO style={{ color: 'rgb(15, 20, 25)' }}/>
        </div>
        <span className={styles.sidebar__text}>More</span>
      </div>
      <div className={styles.sidebar__tweet}>
        <button onClick={handleToggle}>Tweet</button>
      </div>     
      <PopOver />
      <div>
        <Dialog open={toggle}>
          <div className={styles.imagDiv}>
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.12057735.1682684447&semt=robertav1_2_sidr"
              alt=""
              className={styles.BigPhoto}
            />

            <span>
              <AiOutlineClose className={styles.cross} onClick={handleToggle} />
            </span>
          </div>

          <textarea
            className={styles.ForTweet}
            placeholder="What is happening ?"
            onChange={handleTextchange}
          />

          <DialogActions>
            <button onClick={hadleTweet} className={styles.TweetBtn}>
              tweet
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default LeftBarMenu;
