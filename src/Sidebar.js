import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sideBar__recentItem">
            <span className="sideBar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <img
          src="https://images.unsplash.com/photo-1614850523011-8f49ffc73908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGJhY2tncm91bmRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <Avatar className="sideBar__avatar" />
        <h2>Devansh Sharma</h2>
        <h4>sharmaadevaansh@gmail.com</h4>

        <div className="sideBar__stats">
          <div className="sideBar__stat">
            <p>Who's viewed your profile: </p>
            <p className="sideBar__statNumber">2431</p>
          </div>
          <div className="sideBar__stat">
            <p>Impressions of your post:</p>
            <p className="sideBar__statNumber">297</p>
          </div>
        </div>
      </div>
      <div className="sideBar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("JavaScript")}
        {recentItem("MongoDB")}
        {recentItem("TailWind")}
        {recentItem("HTML")}
      </div>
    </div>
  );
}

export default Sidebar;
