import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <MenuIcon className="menu" fontSize="large" />
        <img
          alt="loo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
        />
      </div>

      <div className="navbarSearch">
        <span className="inputBar">
          <SearchIcon className="ok" />
          <input type="text" placeholder="Search Gmail" />
        </span>
      </div>
      <div className="navbarRight">
        <HelpOutlineIcon className="part1" fontSize="medium" />
        <SettingsIcon className="part2" fontSize="medium" />
        <AppsIcon className="part3" fontSize="medium" />
        <img
          className="part4"
          alt="lo"
          src="https://media.images.yourquote.in/user/large/0/0/0/638/96M32460.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
