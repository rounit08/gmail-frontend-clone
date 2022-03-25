import React from "react";
import "./Tabs.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="primary">
        <InboxIcon />
        <h3>Primary</h3>
      </div>

      <div className="social">
        <PeopleIcon />
        <h3>Social</h3>
      </div>

      <div className="promo">
        <LocalOfferIcon />
        <h3>Promo</h3>
      </div>
    </div>
  );
};

export default Tabs;
