import React from "react";
import voteDownIcon from "../../assets/icons/vote-down.png";
import "./voteDown.css";

/**
 * @description - Vote down component
 *
 * @param {*} props - Component props
 */
const voteDown = props => {
  return (
    <div className="Vote-Down">
      <img
        className="Vote-Image"
        src={voteDownIcon}
        alt="Vote Down"
        onClick={props.onClick}
      />
      <span className="Vote-Text">Vote Down</span>
      <span>{props.voteCount}</span>
    </div>
  );
};

export default voteDown;
