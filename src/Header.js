import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Header() {
    return (
      <div className="header">
        <h1></h1>
        <div className="header__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={GroupIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
          <HeaderOption Icon={MessageRoundedIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
          <HeaderOption avatar={PersonRoundedIcon} title="Me" />
        </div>
      </div>
    );
}

export default Header