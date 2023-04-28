import React from 'react';
import styles from './LeftBarMenu.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FaTwitter } from "react-icons/fa";


function SidebarMenu() {
  return (

    <div className={styles.sidebar}>
     
      <div className={styles.sidebar__item}>
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className={styles.sidebar__item}>
        <ExploreIcon />
        <span>Explore</span>
      </div>
      <div className={styles.sidebar__item}>
        <NotificationsIcon />
        <span>Notifications</span>
      </div>
      
      <div className={styles.sidebar__item}>
        <MessageIcon />
        <span>Messages</span>
      </div>
      <div className={styles.sidebar__item}>
        <BookmarkIcon />
        <span>Bookmarks</span>
      </div>
      <div className={styles.sidebar__item}>
        <AccountCircleIcon />
        <span>Profile</span>
      </div>
    
      <div className={styles.sidebar__item}>
        <MoreHorizIcon />
        <span>More</span>
      </div>
    
      <div className={styles.sidebar__tweet}>
        <button>Tweet</button>
      </div>
      <div className={styles.sidebar__profile}>
        <img src="https://picsum.photos/id/237/200/300" alt="User profile" />
        <div className={styles.sidebar__profileInfo}>
          <h4>John Doe</h4>
          <p>@johndoe</p>
        </div>
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default SidebarMenu;