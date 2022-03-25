import React from "react";
import "./SelectionNav.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ReplayIcon from "@mui/icons-material/Replay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SelectionNav = () => {
  return (
    <div className="selectionNav">
      <div className="left">
        <CheckBoxOutlineBlankIcon className="plo" />
        <ArrowDropDownIcon />
        <ReplayIcon className="plot" />
        <MoreVertIcon className="ploty" />
      </div>

      <div className="right">
        <p>1-50 of 1,250</p>
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default SelectionNav;
