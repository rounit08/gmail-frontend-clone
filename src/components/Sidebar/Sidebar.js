import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarCompose">
        <AddIcon className="add" fontSize="large" />
        <h4>Compose</h4>
      </div>
      <div className="sideoption">
        <SidebarOption Icon={<AllInboxIcon />} title="Inbox" number="2256" />
        <SidebarOption Icon={<StarRateIcon />} title="Starred" />
        <SidebarOption Icon={<WatchLaterIcon />} title="Snoozed" />
        <SidebarOption Icon={<SendIcon />} title="Sent" />
        <SidebarOption Icon={<DraftsIcon />} title="Drafts" />
        <SidebarOption Icon={<ArrowDropDownIcon />} title="More" />
      </div>

      <div className="sideoption2">
        <h5 className="textokok"> Meet</h5>
        <SidebarOption Icon={<VideocamIcon />} title="New Meeting" />
        <SidebarOption Icon={<KeyboardIcon />} title="Join a meeting" />
      </div>
    </div>
  );
};

export default Sidebar;
