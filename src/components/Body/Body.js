import React from "react";
import "./Body.css";
import Email from "./Email";
import SelectionNav from "./SelectionNav";
import Tabs from "./Tabs";

const Body = () => {
  return (
    <div className="body">
      <SelectionNav />
      <Tabs />
      <Email />
    </div>
  );
};

export default Body;
