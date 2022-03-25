import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, number }) => {
  return (
    <div className="sidebarOption">
      <h1 className="ok">{Icon}</h1>
      <h4 className="okk">{title}</h4>
      <p className="okkk">{number}</p>
    </div>
  );
};

export default SidebarOption;
