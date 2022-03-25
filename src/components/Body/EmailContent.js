import React from "react";
import "./EmailContent.css";

const EmailContent = ({ checkbox, star, doublearrow, name, desc, time }) => {
  return (
    <div className="content">
      <h4 className="contentA">{checkbox}</h4>
      <h4 className="contentB">{star}</h4>
      <p className="contentC">{doublearrow}</p>
      <h4 className="contentD">{name}</h4>
      <p className="contentE">{desc}</p>
      <p className="contentF">{time}</p>
    </div>
  );
};

export default EmailContent;
